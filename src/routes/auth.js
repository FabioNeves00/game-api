import { Router } from 'express';
import authController from '../controllers/authController.js';
import { validatorRegister, validatorAuth } from '../middlewares/validator.js';

const router = Router();

router.post('/register', validatorRegister, authController.register);

router.post('/authenticate', validatorAuth, authController.authenticate);

router.post('/forgot_password', authController.forgotPassword);

router.post('/reset_password', authController.resetPassword);

export default router;
