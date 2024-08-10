const asyncHandler = require("../middleware/asyncHandler");
const Category = require("../models/Category");

// @desc    Get all meals
// @route   GET /api/v1/meals
// @access  Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({});
  res.json(categories);
  // try {
  //   const meals = await Food.find();
  //   res.status(200).json({ success: true, data: meals });
  // } catch (error) {
  //   res.status(400).json({ success: false });
  // }
});

exports.getCategoryById = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ success: false });
    }
    //res.status(200).json({ success: true, data: food });
    res.json(category);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});
