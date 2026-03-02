const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    bestTime: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    activities: {
      type: [String], // Array of strings
      required: true,
    },
    accommodation: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Place", placeSchema);
