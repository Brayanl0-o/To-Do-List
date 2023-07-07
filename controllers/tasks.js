const { default: mongoose } = require('mongoose')
const Task = require('../models/tasks')


const controllerTask = {
    create: async (req, res) => {
        try {
            const assignedUser = req.body.assignedUser
            const name_user = req.body.name_user
            const description = req.body.description
            const status = req.body.status
            await Task.create({
                assignedUser: assignedUser,
                name_user: name_user,
                description: description,
                status: status
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
            const assignedUser = req.body.assignedUser
            const name_user = req.body.name_user
            const description = req.body.description
            const status = req.body.status
            await Task.findByIdAndUpdate(id, {
                assignedUser: assignedUser,
                name_user: name_user,
                description: description,
                status: status
            })
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params
            await Task.findByIdAndDelete(id)
            res.json({ msg: "Task delete" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}

module.exports = controllerTask