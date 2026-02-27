const express = require("express");
const Tour = require("../models/tour");

const router = express.Router();

// Create Tour
router.post("/", async (req, res) => {
  const tour = new Tour(req.body);
  await tour.save();
  res.json(tour);
});

// Get All Tours
router.get("/", async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
});

module.exports = router;
