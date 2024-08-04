const express = require("express");

const { getProducts, getFood } = require("../controllers/products");

const router = express.Router();

router.route("/").get(getProducts); //.post(createMeals);
router.route("/:id").get(getFood); //.put(updateMeal).delete(deleteMeal);

module.exports = router;
