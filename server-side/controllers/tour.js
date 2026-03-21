const Tour = require("../models/Tour");

// Add Tour (Admin)
const createTour = async (req, res) => {
  try {
    const { title, location, description, price, duration, image } = req.body;

    const tour = new Tour({
      title,
      location,
      description,
      price,
      duration,
      image,
    });

    await tour.save();

    res.status(201).json({
      success: true,
      message: "Tour created successfully",
      tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating tour",
      error: error.message,
    });
  }
};

// Get All Tours
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      success: true,
      count: tours.length,
      tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tours",
      error: error.message,
    });
  }
};

// Get Single Tour
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tour",
      error: error.message,
    });
  }
};

// Delete Tour
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting tour",
      error: error.message,
    });
  }
};

module.exports = {
  createTour,
  getAllTours,
  getTourById,
  deleteTour,
};