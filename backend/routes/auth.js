// routes/auth.js
const express = require('express');

const User = require('../models/User');

const router = express.Router();


const {login,createUser}=require("../controllers/users")
// Signup Route
router.post('/signup',createUser);

// Login Route
router.post('/login', login);

module.exports = router;
