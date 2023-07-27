const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

//to name the SChema
const TodoList = mongoose.model("TodoList", todoSchema);

//export
module.exports = TodoList;
