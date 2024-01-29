const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
    require: true,
  },
  delete_at: {
    type: Date,
    default: null,
  },
  created_by: {
    type: String,
    required: true,
  },
  deadline: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
