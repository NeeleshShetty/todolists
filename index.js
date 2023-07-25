const { log } = require("console");
const express = require("express");

//create express application
const app = express();
//port number
const port = 8960;

//setting up ejs
app.set("view engine", "ejs");
app.set("views", "./views");

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

app.listen(port, function (err) {
  if (err) {
    console.log("Error in the server");
  }
  console.log(`Server up and running in port : ${port}`);
});
