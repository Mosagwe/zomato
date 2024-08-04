const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add product"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  description: { type: String, required: [true, "Please add description"] },
  price: {
    type: Number,
    required: [true, "Please add price"],
  },
  category: {
    type: String,
    required: true,
    enum: ["breakfast", "lunch", "dinner", "snacks", "drinks", "nightlife"],
  },
  imageUrl: String,
});

module.exports = mongoose.model("Product", ProductSchema);
