const express = require("express");
const router = express.Router();

// Handles GET requests for "/students".
router.get("/", (req, res) => {
  res.render("addOrEdit", {
    viewTitle: "Insert Student Information",
  });
});

// Handles POST requests for "/students".
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
