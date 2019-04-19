var express = require("express");
var htmlRouter = express.Router();
var path = require("path");

htmlRouter.get('/', function (req, res) {
  res.sendFile("home.html", {root: path.join('./public')});
});

htmlRouter.get('/survey', function (req, res) {
  res.sendFile("survey.html", {root: path.join('./public')});
});

htmlRouter.get("*", function(req, res) {
  res.sendFile("home.html", {root: path.join('./public')});
});

module.exports = htmlRouter;

  