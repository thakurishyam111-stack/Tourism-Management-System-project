require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tourismDB";
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error", err));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tours", require("./routes/tourRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
