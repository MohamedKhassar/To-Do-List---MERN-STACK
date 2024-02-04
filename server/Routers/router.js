const { Router } = require("express");
const Controller = require("../Controllers/todoController");
const router = Router();

router.get("/api/tasks/status", Controller.getTaskByStatus);
router.get("/api/tasks/priority", Controller.getTaskByPriority);
router.get("/api/tasks", Controller.getAllTasks);
router.get("/api/tasks/trash", Controller.getAllTrash);
router.get("/api/tasks/:id", Controller.getTaskByID);
router.post("/api/tasks", Controller.postTask);
router.put("/api/tasks/:id", Controller.updateTask);
router.put("/api/delete/tasks/:id", Controller.deleteTask);

module.exports = router;
