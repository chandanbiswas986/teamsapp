const usersController = require("../controllers/users.controller");
var express = require("express");
var router = express.Router();
router.post("/login",usersController.authenticate);

module.exports = router;