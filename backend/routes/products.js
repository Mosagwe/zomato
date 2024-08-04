const express = require("express");

const { getFoods, getFoodById } = require("../controllers/products");

const router = express.Router();

router.route("/").get(getFoods); //.post(createMeals);
router.route("/:id").get(getFoodById); //.put(updateMeal).delete(deleteMeal);

module.exports = router;
