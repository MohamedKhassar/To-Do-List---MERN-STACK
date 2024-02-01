const handelErrors = require("../error/handelErrors");
const TodoModel = require("../models/TodoModel");

const Controller = {
  postTask: async (req, res) => {
    try {
      await TodoModel.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        created_by: req.body.created_by,
        deadline: req.body.deadline,
      });
      res.status(201).json("created");
    } catch (err) {
      const error = handelErrors(err);
      throw Error(error);
    }
  },
  getAllTasks: async (req, res) => {
    try {
      const result = await TodoModel.find({ delete_at: null });

      res.json(result);
    } catch (err) {
      console.log(err.message);
    }
  },
  getTaskByID: async (req, res) => {
    const { id } = req.params.id;
    try {
      const result = await TodoModel.findById(id);
      if (!result) {
        res.status(404).json("Not Found");
      } else {
        res.json(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  updateTask: async (req, res) => {
    try {
      await TodoModel.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
      const error = handelErrors(err);
      throw Error(error);
    }
  },
  deleteTask: async (req, res) => {
    try {
      await TodoModel.findByIdAndUpdate(req.params.id, {
        delete_at: new Date().toISOString(),
      });
      res.json("deleted");
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = Controller;
