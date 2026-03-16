const express = require("express");
const router = express.Router();
const Service = require("../models/service");

// GET all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ success: true, services });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching services",
        error: error.message,
      });
  }
});

// GET single service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });

    res.status(200).json({ success: true, service });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message
    });
  }
});

// POST create new service
router.post("/", async (req, res) => {
  try {
    const { title, desc, features, img } = req.body;
    if (!title || !desc)
      return res
        .status(400)
        .json({ success: false, message: "Title and description required" });

    const newService = new Service({
      title,
      desc,
      features: features || [],
      img: img || "",
    });

    await newService.save();
    res.status(201).json({ success: true, service: newService });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error creating service",
        error: error.message,
      });
  }
});

// PUT update service by ID
router.put("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });

    const { title, desc, features, img } = req.body;
    if (title) service.title = title;
    if (desc) service.desc = desc;
    if (features) service.features = features;
    if (img) service.img = img;

    await service.save();
    res.status(200).json({ success: true, service });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error updating service",
        error: error.message,
      });
  }
});

// DELETE service by ID
router.delete("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });

    await service.remove();
    res
      .status(200)
      .json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error deleting service",
        error: error.message,
      });
  }
});

module.exports = router;
