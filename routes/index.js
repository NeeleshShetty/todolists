const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.post("/add_todo", homeController.add);
router.get("/delete-todo", homeController.delete);

console.log("router is working fine");
module.exports = router;
