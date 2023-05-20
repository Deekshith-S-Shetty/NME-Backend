const express = require("express");
const studentController = require("./controllers/studentController");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Now starting at port: 3000");
});

// Set engine to use hbs files.
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "addOrEdit",
    layoutsDir: __dirname + "/views/",
  })
);

// connect to DataBase through db.js.
require("./models/db");

app.set("view engine", "hbs");

// The Routes for "/students" will be controlled by studentController.
app.use("/student", studentController);
