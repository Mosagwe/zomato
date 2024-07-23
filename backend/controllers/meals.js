const Meal = require("../models/Meal");

// @desc    Get all meals
// @route   GET /api/v1/meals
// @access  Public
exports.getMeals = async (req, res, next) => {
  try {
    const meals = await Meal.find();
    res.status(200).json({ success: true, data: meals });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single meal
// @route   GET /api/v1/meal/:id
// @access  Public
exports.getMeal = async (req, res, next) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: meal });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Store meals
// @route   POST /api/v1/meals
// @access  Private
exports.createMeals = async (req, res, next) => {
  try {
    const meal = await Meal.create(req.body);
    res.status(201).json({
      success: true,
      data: meal,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Edit meals
// @route   PUT /api/v1/meals/:id
// @access  Public
exports.updateMeal = (req, res, next) => {};

// @desc    Delete all meals
// @route   DELETE /api/v1/meals
// @access  Public
exports.deleteMeal = (req, res, next) => {};
