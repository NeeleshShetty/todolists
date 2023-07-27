//database linking with the controller
const TodoList = require("../models/todolist");

module.exports.home = function (req, res) {
  TodoList.find({}, function (err, todolists) {
    if (err) {
      console.log("error in fetching the data");
      return;
    }
    return res.render("home", {
      title: "TODOLIST",
      TODO: todolists,
    });
  });

  console.log("COntroller is working");
};

module.exports.add = function (req, res) {
  TodoList.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newtodoList) {
      if (err) {
        console.log("error in creating lists");
      }

      console.log("*****", newtodoList);
      return res.redirect("back");
    }
  );
};

module.exports.delete = function (req, res) {
  let id = req.query._id;

  TodoList.findByIdAndDelete(id, function (err) {
    console.log("Error in deleting the list");
    return;
  });

  return res.redirect("back");
};
