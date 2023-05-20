const mongoose = require("mongoose");

// create a mondel for student data (This file is not used anywhere, yet).
var studentSchema = new mongoose.Schema({
  stud_name: {
    type: String,
    required: "This student needs name.",
  },
  email_add: {
    type: String,
  },
  contact: {
    type: String,
  },
  country: {
    type: String,
  },
});

mongoose.model("Student", studentSchema);
