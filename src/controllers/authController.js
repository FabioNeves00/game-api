import dotenv from 'dotenv';

dotenv.config();

class AuthController {
  async register(req, res) {
    return res.send({ route: 'register' });
  }

  async authenticate(req, res) {
    return res.send({ route: 'authenticate' });
  }

  async forgotPassword(req, res) {
    return res.send({ route: 'forgotPassword' });
  }

  async resetPassword(req, res) {
    return res.send({ route: 'resetPassword' });
  }
}

export default new AuthController();
