import express from 'express';
import { deleteGoals, getGoals, setGoals, updateGoals } from '../controller/goalController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// Get goals
// router.get('/', getGoals);

// Set goals
// router.post('/', setGoals);

// Makes the code cleaner since they are in the same route
router.route('/').get(protect, getGoals).post(protect, setGoals);

// Update and set goals route
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

export default router;




