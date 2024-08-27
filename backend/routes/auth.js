// routes/auth.js
const express = require("express");

const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

const {
  login,
  createUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/users");

// Signup Route
router.post("/signup", createUser);

// Login Route
router.post("/login", login);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
