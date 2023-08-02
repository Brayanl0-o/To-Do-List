const mongoose = require('mongoose')

//Created a const to store the mongoose module (allows create a model Schema)
const Schema = mongoose.Schema


//Define a variable to store the new Schema
const TaskSchema = new Schema({
    // Define the structure of the required fields 
    name_user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        maxLength: 100
    },
    name_task: {
        type: String,
        required: true,
        maxLength: 150
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in progress', 'completed'],
        lowercase: true

    },
    deadline: {
        type: Date,
        required: false
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})

// Create a new const to hold the model with the new Schema
// and defined tasks for create a new collection in the database
const task = mongoose.model("tasks", TaskSchema)
module.exports = task