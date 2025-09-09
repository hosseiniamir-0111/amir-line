const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// تست اولیه
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// اتصال به دیتابیس
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(5000, () => console.log("Server running on port 5000 🚀"));
  })
  .catch(err => console.log(err));