require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const placeRoutes = require("./routes/placeRouters");
const app = express();

app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tourismDB";
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error", err));
const userRoutes = require("./routes/userRoutes");

app.use("/users", require("./routes/userRoutes"));
app.use("/tours", require("./routes/tourRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));
app.use("/places", require("./routes/placeRouters"));
app.use("/services", require("./routes/servicesRoutes"));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Periodic poller: fetch a configured endpoint at intervals
const POLL_URL = process.env.POLL_URL || "http://localhost:8080/places";
const POLL_INTERVAL_MS =
  parseInt(process.env.POLL_INTERVAL_MS, 10) || 60 * 1000; // default: 1 minute

async function pollEndpoint() {
  try {
    const res = await fetch(POLL_URL);
    if (!res.ok) {
      console.error(`Polling ${POLL_URL} failed:`, res.status, res.statusText);
      return;
    }
    const data = await res.json();
    console.log(
      `Polled ${POLL_URL} — items:`,
      Array.isArray(data) ? data.length : typeof data,
    );
  } catch (err) {
    console.error(`Error polling ${POLL_URL}:`, err.message || err);
  }
}

// Run immediately, then on interval
pollEndpoint();
setInterval(pollEndpoint, POLL_INTERVAL_MS);
