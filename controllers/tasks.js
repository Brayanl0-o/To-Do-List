const { default: mongoose } = require('mongoose')

//Use the models forlder and the tasks file to import the task models
const Task = require('../models/tasks')

//Function defined to store the asynchronous tasks CRUD functions
const controllerTask = {
    create: async (req, res) => {
        try {
            const name_user = req.body.name_user
            const description = req.body.description
            const status = req.body.status
            const deadline = new Date(req.body.deadline)
            const createDate = req.body.createDate

            //Validate if the deadline is a valid date
            if (isNaN(deadline)) {
                return res.status(400).json({ msg: 'La fecha límite no es válida' });
            }
            //Wait to receive the created task with the promise
            await Task.create({
                name_user: name_user,
                description: description,
                status: status,
                deadline: deadline,
                createDate: createDate
            }).then(console.log('Task created'))
            res.json({ msg: 'created' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getTasks: async (req, res) => {
        try {
            const tasks = await Task.find({})
            res.json(tasks)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getTasksById: async (req, res) => {
        try {
            const { id } = req.params
            const task = await Task.findById(id)
            res.json(task)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateTask: async (req, res) => {
        try {
            const { id } = req.params
            const name_user = req.body.name_user
            const description = req.body.description
            const status = req.body.status
            const deadline = req.body.deadline
            const createDate = req.body.createDate

            //Updaete the task with the provided ID
            await Task.findByIdAndUpdate(id, {
                name_user: name_user,
                description: description,
                status: status,
                deadline: deadline,
                createDate: createDate
            })
            //Return a success message or an error message
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params
            await Task.findByIdAndDelete(id)
            res.json({ msg: "Task deleted" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}

//Exports the function mostly controllerTask
module.exports = controllerTask