const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fs = require("fs");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const photoController = require("./controller/photoController");
const pageController = require("./controller/pageController");

const app = express();

// Connect DB
mongoose.connect("mongodb://localhost/pcat-test-db");
console.log("db connect");

// TAMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// PAGE CONTROLLER
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/photos/edit/:id", pageController.getEditPage);

// PHOTO CONTROLLER
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.put("/photos/:id", photoController.updatePhoto);
app.delete("/photos/:id", photoController.deletePhoto);
app.post("/photos", photoController.createPhoto);

const port = 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server up ${port}`);
});
