const { Router } = require("express");
const Controller = require("../Controllers/todoController");
const router = Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger options
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Todo API",
        version: "1.0.0",
        description: "API documentation for a Todo application",
      },
    },
    apis: ["./**/*.js"],
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 
  router.get("/api/tasks/status", Controller.getTaskByStatus);
  router.get("/api/tasks/priority", Controller.getTaskByPriority);
  
  /**
   * @swagger
   * /api/tasks:
   *   get:
   *     summary: Get all tasks
   *     responses:
   *       200:
   *         description: Successful response
   *       404:
   *         description: Not Found
   */
router.get("/api/tasks", Controller.getAllTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not Found
 */
router.get("/api/tasks/:id", Controller.getTaskByID);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               created_by:
 *                 type: string
 *                 description: the name of who created the task
 *                 required: true
 *               title:
 *                 type: string
 *                 description: The title of the task
 *                 required: true
 *               description:
 *                 type: string
 *                 description: The description of the task
 *               status:
 *                 type: string
 *                 enum: [ "to do", "doing", "done" ]
 *                 description: The status of the task (to do, doing, or done)
 *               priority:
 *                 type: string
 *                 enum: [ "important", "not important" ]
 *                 description: The priority of the task (important, not important)
 *               deadline:
 *                 type: string
 *                 format: date
 *                 description: the deadline of the task
 *                 required: true
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post("/api/tasks", Controller.postTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               created_by:
 *                 type: string
 *                 description: the name of who created the task
 *                 required: true
 *               title:
 *                 type: string
 *                 description: The title of the task
 *                 required: true
 *               description:
 *                 type: string
 *                 description: The description of the task
 *               status:
 *                 type: string
 *                 enum: [ "to do", "doing", "done" ]
 *                 description: The status of the task (to do, doing, or done)
 *               priority:
 *                 type: string
 *                 enum: [ "important", "not important" ]
 *                 description: The priority of the task (important, not important)
 *               deadline:
 *                 type: string
 *                 format: date
 *                 description: the deadline of the task
 *                 required: true
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 */
router.put("/api/tasks/:id", Controller.updateTask);

/**
 * @swagger
 * /api/delete/tasks/{id}:
 *   put:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not Found
 */
router.put("/api/delete/tasks/:id", Controller.deleteTask);

module.exports = router;
