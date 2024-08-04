const users = require("./data/users.js");
const foods = require("./data/foods.js");
const User = require("./models/User.js");
const Food = require("./models/Food.js");
const Order = require("./models/Order.js");
const connectDB = require("./config/db");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
//dotenv.config();
// Load env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Food.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleFoods = foods.map((food) => {
      return { ...food, user: adminUser };
    });

    await Food.insertMany(sampleFoods);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Food.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
