const express = require('express')

//Uses controllers folder and the users file
const controllerUser = require('../controllers/users')


const router = express.Router()

//Routes created: To see the list of users, find user by its id, updated a task and delete a task by its id
router.post('/create', controllerUser.create)
router.get('/', controllerUser.getUsers)
router.get('/:id', controllerUser.getUsersById)
router.patch('/update/:id', controllerUser.updateUser)
router.delete('/delete/:id', controllerUser.deleteUser)



module.exports = router