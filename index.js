const { log } = require("console");
const express = require("express");

//create express application
const app = express();
//port number
const port = 8960;

//setting up ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware
app.use(express.urlencoded());

//database

const db = require("./config/mongoose");
const TODO = require("./models/todolist");

const todo = [
  {
    description: "What to do today?",
    category: "TASK",
    date: "21JUL",
  },
  {
    description: "What to do tommorrow?",
    category: "TASK",
    date: "22JUL",
  },
  {
    description: "What to do yesterday?",
    category: "TASK",
    date: "23JUL",
  },
];

//rendering the home.ejs file
app.get("/", function (req, res) {
  return res.render("home", {
    title: "TODO_LIST",
    TODO: todo,
  });
});

// add a todo list
app.post("/add_todo", function (req, res) {
  todo.push(req.body);
  return res.redirect("back");
});

// //delete a todo list
// app.post("/");

app.listen(port, function (err) {
  if (err) {
    console.log("Error in the server");
  }
  console.log(`Server up and running in port : ${port}`);
});
