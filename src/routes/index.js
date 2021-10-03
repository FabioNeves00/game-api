import { Router } from 'express';
import authRoutes from './auth.js';

const routes = Router();

routes.use('/auth', authRoutes);

export default routes;
