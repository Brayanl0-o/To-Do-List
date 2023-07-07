const express = require('express')

//Uses the controllers folder and the tasks file
const controllerTask = require('../controllers/tasks')



const router = express.Router()

//Routes created: To see the list of tasks, find task by its id, updated a task and delete a task by its id
router.post('/create', controllerTask.create)
router.get('/', controllerTask.getTasks)
router.get('/:id', controllerTask.getTasksById)
router.patch('/update/:id', controllerTask.updateTask)
router.delete('/delete/:id', controllerTask.deleteTask)

//Use export const router like a module
module.exports = router