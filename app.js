const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

// TAMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./views/index.html"));
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

const port = 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server up ${port}`);
});
