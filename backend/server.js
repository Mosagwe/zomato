const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const path = require('path');

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();
// Route files
const meals = require("./routes/meals");
const products = require("./routes/products");
const authRoutes = require("./routes/auth");
const app = express();

// Body parser
app.use(express.json());
app.use(cors());
// Serve static files from the "public" directory
//app.use(express.static('public'));

// mount routers
app.use("/api/v1/meals", meals);
app.use("/api/v1/products", products);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5002;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

// Handle Unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => promise.exit(1));
});
