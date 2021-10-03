import { Router } from 'express';
import authController from '../controllers/authController.js';

const router = Router();

router.post('/register', authController.register);

router.post('/authenticate', authController.authenticate);

router.post('/forgot_password', authController.forgotPassword);

router.post('/reset_password', authController.resetPassword);

export default router;
