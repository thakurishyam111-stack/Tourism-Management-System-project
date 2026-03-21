const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  duration: {
    type: String,
  },

  image: {
    type: String,
  },

}, { timestamps: true });

module.exports = mongoose.model("Tour", tourSchema);