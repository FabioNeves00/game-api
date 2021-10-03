import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import User from '../models/User.js';

dotenv.config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET_KEY, {
    expiresIn: 86400,
  });
}

class AuthController {
  async register(req, res) {
    const { name, email, password } = req.body;
    const validator = validationResult(req);

    try {
      if (validator.errors.length) {
        const errors = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const error of validator.errors) {
          errors.push(`This ${error.param} is invalid.`);
        }

        // Este filtro eu coloquei pra corrigir um erro de return
        // Caso saiba como solucionar,pf deixe uma msg pra mim t-t. Obg
        return res.status(400).send({
          error: errors.filter((item, pos) => errors.indexOf(item) === pos),
        });
      }

      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'This email already exists.' });

      const user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(400).send({ error: 'Registration failed.' });
    }
  }

  async authenticate(req, res) {
    const { email, password } = req.body;
    const validator = validationResult(req);

    try {
      if (validator.errors.length) {
        const errors = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const error of validator.errors) {
          errors.push(`This ${error.param} is invalid.`);
        }

        // Este filtro eu coloquei pra corrigir um erro de return
        // Caso saiba como solucionar,pf deixe uma msg pra mim t-t. Obg
        return res.status(400).send({
          error: errors.filter((item, pos) => errors.indexOf(item) === pos),
        });
      }

      const user = await User.findOne({ email }).select('+password');

      if (!user) return res.status(404).send({ error: 'User not found.' });

      if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).send({ error: 'This password is incorrect.' });

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return undefined;
    }
  }

  async forgotPassword(req, res) {
    return res.send({ route: 'forgotPassword' });
  }

  async resetPassword(req, res) {
    return res.send({ route: 'resetPassword' });
  }
}

export default new AuthController();
