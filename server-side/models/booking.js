const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    required: true
  },

  bookingDate: {
    type: Date,
    default: Date.now
  },

  persons: {
    type: Number,
    required: true
  },

  totalPrice: {
    type: Number,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);