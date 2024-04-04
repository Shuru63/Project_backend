require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const mongoDb = require('./db');
const createUserRoute = require('./Routes/CreateUser');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


mongoDb()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.get('/', (req, res) => {
  res.send("Hello, world!");
});

app.use('/api', createUserRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
