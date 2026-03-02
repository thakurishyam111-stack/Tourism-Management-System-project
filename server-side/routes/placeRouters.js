const express = require("express");
const router = express.Router();
const Place = require("../models/place");

// GET all places
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not fetch places", error: err.message });
  }
});

// GET single place by ID
router.get("/", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json(place);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching place", error: err.message });
  }
});

// POST new place
router.post("/", async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not create place", error: err.message });
  }
});

// PUT update place
router.put("/:id", async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json(place);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not update place", error: err.message });
  }
});

// DELETE place
router.delete("/:id", async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json({ success: true, deleted: place });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not delete place", error: err.message });
  }
});

module.exports = router;
