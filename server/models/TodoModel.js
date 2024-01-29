const mongoose = require("mongoose");
const { isDate } = require("validator");
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter a title"],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["to do", "doing", "done"],
    default: "to do",
  },
  priority: {
    type: String,
    enum: ["important", "not important"],
    default: "not important",
  },
  delete_at: {
    type: Date,
    default: null,
  },
  created_by: {
    type: String,
    required: [true, "please enter your name"],
  },
  deadline: {
    type: Date,
    required: [true, "please enter a deadline"],
    validate: [isDate, "please enter a valid date"],
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
