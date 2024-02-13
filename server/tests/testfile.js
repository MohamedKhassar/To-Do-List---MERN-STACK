const TodoModel = require('../models/TodoModel');

const getTasksFromDatabase = async () => {
  return TodoModel.find({});
};

module.exports = { getTasksFromDatabase };