const TodoModel = require("../models/TodoModel");
const Controller = {
  postTask: async (req, res) => {
    try {
      const result = await TodoModel.create({
        title: req.title,
        description: req.description,
        status: req.status,
        priority: req.priority,
        created_by: req.created_by,
        deadline: req.deadline,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
  getAllTasks: async (req, res) => {
    try {
      const result = await TodoModel.find();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  },
  getTaskByID: async (req, res) => {
    try {
      const result = await TodoModel.find(req.params.id);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  },
  updateTask: async (req, res) => {
    try {
      await TodoModel.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
      console.log(err.message);
    }
  },
  deleteTask: async (req, res) => {
    try {
      await TodoModel.findByIdAndUpdate(req.params.id, {
        delete_at: new Date().toISOString(),
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = Controller;
