const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  //const { email, password } = req.body;

  // try {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = new User({ email, password: hashedPassword });
  //   await user.save();
  //   res.status(201).json({ message: 'User created' });
  // } catch (error) {
  //   res.status(500).json({ message: 'Error creating user', error });
  // }

  try {
    let { name, email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      throw new Error("User already exist with email");
    }
    password = await bcrypt.hash(password, 8);

    const user = await User.create({ name, email: email, password: password });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json("Successful login");
      } else {
        res.json("Invalid credentials");
      }
    } else {
      res.json("No record exist");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error logging in!" });
  }
};
