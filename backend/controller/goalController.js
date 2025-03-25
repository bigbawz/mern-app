import asyncHandler from 'express-async-handler';

// @desc    Get Goals
// @routes  GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({ message: 'Get goals' });
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

    res
    .status(200)
    .json({ message: 'Set goals' });
});

// @desc    Update goals
// @routes  PUT /api/goals/:id
// @access  Private
export const updateGoals = asyncHandler(async (req,res) => {
    res
    .status(200)
    .json({ message: `Update goals ${req.params.id}` });
});

// @desc    Delete goals
// @routes  DELETE /api/goals/:id
// @access  Private
export const deleteGoals = asyncHandler(async (req,res) => {
    res
    .status(200)
    .json({ message: `Delete goals ${req.params.id}` });
});