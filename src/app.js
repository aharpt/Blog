"use strict";

var express = require("express"),
    posts = require("./mock/posts.json")

var app = express();

app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "pug");
app.set("views", __dirname + "/templates");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/post", function(req, res) {
  res.render("post");
});

app.get("/blog/:title?", function(req, res) {
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.send("This page is under construction.");
  } else {
    var post = posts[title] || {};
    res.render("post", {post: post});
  }
});

app.listen(3000, function() {
  console.log("Frontend server running at port 3000");
});
