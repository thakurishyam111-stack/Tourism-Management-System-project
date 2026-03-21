const Booking = require("../models/Booking");
const Tour = require("../models/Tour");

// Create Booking
const createBooking = async (req, res) => {
  try {

    const { tourId, persons } = req.body;

    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).json({
        message: "Tour not found"
      });
    }

    const totalPrice = tour.price * persons;

    const booking = new Booking({
      user: req.userId,
      tour: tourId,
      persons,
      totalPrice
    });

    await booking.save();

    res.status(201).json({
      success: true,
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { createBooking };