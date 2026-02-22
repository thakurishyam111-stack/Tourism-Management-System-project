const express = require("express");

const app = express();
const users = [];

// Middleware to parse JSON
app.use(express.json());

// GET route to retrieve all users
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users retrieved successfully",
    data: users,
  });
});


// POST route to create a new user
app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({
    message: "User created successfully",
    data: req.body,
  });
});

module.exports = app;
