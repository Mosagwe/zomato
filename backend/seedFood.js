// seedFoods.js

const mongoose = require("mongoose");
const Food = require("./models/Food");


// Replace with your MongoDB connection string
const mongoURI =
  "mongodb+srv://mospeto1:busines09@mospeto.dlzpic9.mongodb.net/food-ordering?retryWrites=true";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to the database");

  // Sample food data
  const foods = [
    {
      name: "Pancakes",
      description: "Fluffy pancakes with maple syrup",
      imageUrl: "/images/breakfast.jpg",
      category: "breakfast",
      price: 5.99,
    },
    {
      name: "Grilled Chicken Sandwich",
      description: "Grilled chicken sandwich with lettuce and tomato",
      imageUrl: "/images/lunch.jpg",
      category: "lunch",
      price: 7.99,
    },
    {
      name: "Steak Dinner",
      description: "Juicy steak with mashed potatoes and asparagus",
      imageUrl: "/images/dinner.jpg",
      category: "dinner",
      price: 14.99,
    },
    {
      name: "Chips and Salsa",
      description: "Crispy tortilla chips with fresh salsa",
      imageUrl: "/images/snacks.jpg",
      category: "snacks",
      price: 3.99,
    },
    {
      name: "Margarita",
      description: "Classic margarita with lime",
      imageUrl:  "/images/drinks.jpg",
      category: "drinks",
      price: 8.99,
    },
    {
      name: "Club Sandwich",
      description: "Club sandwich with turkey, bacon, and lettuce",
      imageUrl: "/images/nightlife.jpg",
      category: "nightlife",
      price: 9.99,
    },
  ];

  try {
    // Clear existing data
    await Food.deleteMany({});
    console.log("Cleared old food data");

    // Insert new data
    await Food.insertMany(foods);
    console.log("Inserted new food data");

    db.close();
    console.log("Database connection closed");
  } catch (err) {
    console.error("Error seeding food data:", err);
  }
});
