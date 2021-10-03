import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => res.send({ test: 'register' }));

router.post('/authenticate', (req, res) => res.send({ test: 'authenticate' }));

router.post('/forgot_password', (req, res) =>
  res.send({ test: 'forgot_password' }),
);

router.post('/reset_password', (req, res) =>
  res.send({ test: 'reset_password' }),
);

export default router;
