import express from 'express';
import taskRoutes from './tasks.js';
import authRoutes from './auth.js';
import userRoutes from './users.js';

const router = express.Router();

// REQUESTS FOR AUTH
router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);
router.use('/users', userRoutes)

export default router;
