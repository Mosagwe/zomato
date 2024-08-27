const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");

exports.createUser = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      throw new Error("User already exist with email");
    }
    password = await bcrypt.hash(password, 8);

    const user = await User.create({ name, email: email, password: password });
    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        success: true,
        data: user,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid user data!",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        generateToken(res, user._id);
        res.status(200).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
          message: "Successful login",
        });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res.json("No record exist");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error logging in!" });
  }
});

exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ success: true, message: "logout successful" });
});

exports.getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      message: "Successful login",
    });
  } else {
    res.status(404).json({ success: false, message: "User not found!" });
  }
});

exports.updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      user: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      },
      message: "Updated user profile",
    });
  } else {
    res.status(404).json({ success: false, message: "User not found!" });
  }
});
