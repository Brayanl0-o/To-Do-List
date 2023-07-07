const express = require('express')
const controllerTask = require('../controllers/tasks')



const router = express.Router()

router.post('/create', controllerTask.create)
router.get('/', controllerTask.getTasks)
router.get('/:id', controllerTask.getTasksById)
router.patch('/update/:id', controllerTask.updateTask)
router.delete('/delete/:id', controllerTask.deleteTask)

module.exports = router