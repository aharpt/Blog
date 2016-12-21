"use strict";

var express = require("express");

var app = express();

app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "pug");
app.set("views", __dirname + "/templates");

app.get("/", function(req, res) {
  res.render("index", {title: "Clean Blog - Home"});
});

app.get("/about", function(req, res) {
  res.render("about", {title: "Clean Blog - About"});
});

app.get("/contact", function(req, res) {
  res.render("contact", {title: "Clean Blog - Contact"});
});

app.get("/post", function(req, res) {
  res.render("post", {title: "Clean Blog - Post"});
});

app.listen(3000, function() {
  console.log("Frontend server running at port 3000");
});
