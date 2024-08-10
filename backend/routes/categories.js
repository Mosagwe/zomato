const express = require("express");

const { getCategories, getCategoryById } = require("../controllers/categories");

const router = express.Router();

router.route("/").get(getCategories); //.post(createMeals);
router.route("/:id").get(getCategoryById); //.put(updateMeal).delete(deleteMeal);

module.exports = router;
