const express = require("express");
const {
  signup,
  login,
  getUserProfile,
  getAllUsers,
} = require("../controllers/users");
const auth = require("../middleware/auth");

const router = express.Router();

// registration and authentication endpoints
router.post("/register", signup);
router.post("/login", login);

// profile and admin user list
router.get("/profile", auth, getUserProfile);
// admin only in production, but auth middleware protects for now
router.get("/", auth, getAllUsers);

module.exports = router;
