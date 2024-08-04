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
    let { email, password } = req.body;
    //const user = await User.create(req.body);
    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      throw new Error("User already exist with email");
    }
    password = await bcrypt.hash(password, 8);

    const user = await User.create({ email: email, password: password });

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
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Successful login");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
};
