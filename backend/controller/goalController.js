import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';

// @desc    Get Goals
// @routes  GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res
    .status(200)
    .json(goals);
});

// @desc    Set goals
// @routes  PUT /api/goals/
// @access  Private
export const setGoals = asyncHandler(async (req,res) => {
    console.log(req.body);

    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res
    .status(200)
    .json(goal);
});

// @desc    Update goals
// @routes  PUT /api/goals/:id
// @access  Private
export const updateGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    };

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res
    .status(200)
    .json(updatedGoal);
});

// @desc    Delete goals
// @routes  DELETE /api/goals/:id
// @access  Private
export const deleteGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    };

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

    res
    .status(200)
    .json({ id: req.params.id });
});