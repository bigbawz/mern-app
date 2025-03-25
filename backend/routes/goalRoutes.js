import express from 'express';
import { deleteGoals, getGoals, setGoals, updateGoals } from '../controller/goalController.js';
const router = express.Router();

// Get goals
// router.get('/', getGoals);

// Set goals
// router.post('/', setGoals);

// Makes the code cleaner since they are in the same route
router.route('/').get(getGoals).post(setGoals);

// Update and set goals route
router.route('/:id').put(updateGoals).delete(deleteGoals);

export default router;




