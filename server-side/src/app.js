const express = require("express");

const app = express();
const users = [];

app.get("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({
    message: "user created successfully",
  });
});
