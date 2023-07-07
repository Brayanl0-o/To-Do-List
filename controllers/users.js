const { default: mongoose } = require('mongoose')
const User = require('../models/users')


const controllerUser = {
    create: async (req, res) => {
        try {
            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const age = req.body.age
            await User.create({
                first_name: first_name,
                last_name: last_name,
                age: age
            }).then(console.log('User created'))
            res.json({ msg: 'created' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUsersById: async (req, res) => {
        try {
            const { id } = req.params
            const user = await User.findById(id)
            res.json(user)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params
            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const age = req.body.age
            await User.findByIdAndUpdate(id, {
                first_name: first_name,
                last_name: last_name,
                age: age
            })
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params
            await User.findByIdAndDelete(id)
            res.json({ msg: "User delete" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}


module.exports = controllerUser