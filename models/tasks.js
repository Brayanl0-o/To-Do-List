const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    name_user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
        maxLength: 100
    },
    description: {
        type: String,
        require: true,
        maxLength: 200
    },
    status: {
        type: String,
        require: true,
        maxLength: 100
    }
})
const task = mongoose.model("tasks", TaskSchema)
module.exports = task