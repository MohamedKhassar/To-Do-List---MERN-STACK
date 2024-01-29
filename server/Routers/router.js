const { Router } = require('express')
const Controller = require('../Controllers/todoController')
const router = Router.express()

router.get('/api/tasks', Controller.getAllTasks)
router.get('/api/tasks/:id', Controller.getTaskByID)
router.post('/api/tasks', Controller.postTask)
router.put('/api/tasks/:id', Controller.updateTask)
router.put('/api/delete/tasks/:id', Controller.deleteTask)

module.exports = router;