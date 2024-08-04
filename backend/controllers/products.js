const Food = require("../models/Food");

// @desc    Get all meals
// @route   GET /api/v1/meals
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    const meals = await Food.find();
    res.status(200).json({ success: true, data: meals });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: food });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};