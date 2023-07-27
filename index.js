const express = require("express");

//create express application
const app = express();
//port number
const port = 8650;

//database

const db = require("./config/mongoose");

//static files
app.use(express.static("assests"));

//setting up ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware
app.use(express.urlencoded());

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

//routes access
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in the server");
  }
  console.log(`Server up and running in port : ${port}`);
});
