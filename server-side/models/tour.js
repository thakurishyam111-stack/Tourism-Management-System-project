const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    duration: String
});

module.exports = mongoose.model("Tour", tourSchema);