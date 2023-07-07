const express = require('express')
const controllerUser = require('../controllers/users')


const router = express.Router()

router.post('/create', controllerUser.create)
router.get('/', controllerUser.getUsers)
router.get('/:id', controllerUser.getUsersById)
router.patch('/update/:id', controllerUser.updateUser)
router.delete('/delete/:id', controllerUser.deleteUser)

module.exports = router