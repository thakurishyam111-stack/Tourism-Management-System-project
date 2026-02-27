const express = require("express");
const Booking = require("../models/booking");
const auth = require("../middleware/auth");

const router = express.Router();

// create a booking
router.post("/", auth, async (req, res) => {
  try {
    const { tour, persons } = req.body;
    const userId = req.userId;

    const booking = new Booking({ user: userId, tour, persons });
    await booking.save();

    res.status(201).json({ success: true, booking });
  } catch (err) {
    console.error("Booking error", err);
    res
      .status(500)
      .json({
        success: false,
        message: "Could not create booking",
        error: err.message,
      });
  }
});

// list bookings for current user (admin can view all)
router.get("/", auth, async (req, res) => {
  try {
    const userId = req.userId;
    // if admin role handling omitted for brevity
    const bookings = await Booking.find({ user: userId }).populate("tour");
    res.json({ success: true, count: bookings.length, bookings });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Could not fetch bookings",
        error: err.message,
      });
  }
});

module.exports = router;
