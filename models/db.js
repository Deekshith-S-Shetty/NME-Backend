const mongoose = require("mongoose");

//`mongodb://localhost:27017/studentDB` gives error (mongoDB org problem)
const uri = "mongodb://127.0.0.1:27017/studentDB";

// connect to mongoDB locally.
const connectToMongo = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log("Successfully connected to mongoDb");
  } catch (err) {
    console.error("Failed to connect to Mongodb...", err);
  }
};

connectToMongo();
