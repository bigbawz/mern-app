// Define the schema here

import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
});

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;