const asyncHandler = require("../middleware/asyncHandler");
const Food = require("../models/Food");

// @desc    Get all meals
// @route   GET /api/v1/meals
// @access  Public
exports.getFoods = asyncHandler(async (req, res, next) => {
  const products = await Food.find({});
  console.log(products);
  res.json(products);
  // try {
  //   const meals = await Food.find();
  //   res.status(200).json({ success: true, data: meals });
  // } catch (error) {
  //   res.status(400).json({ success: false });
  // }
});

exports.getFoodById = asyncHandler(async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: food });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});
