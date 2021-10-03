/* eslint-disable import/prefer-default-export */
import { body } from 'express-validator';

export const validatorRegister = [
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 20 }),
  // body('password').isStrongPassword(),
];

export const validatorAuth = [
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 20 }),
];
