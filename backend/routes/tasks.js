import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controlers/task.js';

const router =  express.Router();

router.post('/new', createTask);
router.get('/all', getAllTasks);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;