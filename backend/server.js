const express = require("express");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();
// Route files
const meals = require("./routes/meals");
const app = express();

// Body parser
app.use(express.json());

// mount routers
app.use("/api/v1/meals", meals);

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
