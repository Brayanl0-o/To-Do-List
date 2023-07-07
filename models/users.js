const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String,
        require: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        require: true,
        maxLength: 100
    },
    age: {
        type: Number,
        require: true,
        maxLength: 2
    },
    createDate: {
        type: Date,
        default: Date.now
    }

})
// Create a new const to hold the model with the new Schema
// and defined users for create a new collection in the database
const user = mongoose.model("users", UserSchema)
module.exports = user