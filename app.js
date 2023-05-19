const express = require("express");
const path = require("path");
const app = express();
const studentController = require("./controllers/studentController");

require("./models/db");

app.listen(3000, () => {
  console.log("Now starting at port: 3000");
});

app.set("views", path.join(__dirname, "/views/"));

app.set("view engine", "hbs");

app.use("/student", studentController);
