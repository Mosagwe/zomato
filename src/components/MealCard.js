// src/components/MealCard.js

import React from "react";
import "./MealCard.css"; // You can create a CSS file to style the cards

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img
        src={`${meal.imageUrl}`}
        alt={meal.name}
        className="meal-card__image"
      />
      <div className="meal-card__content">
        <h3 className="meal-card__title">{meal.name}</h3>
        <p className="meal-card__description">{meal.description}</p>
        <p className="meal-card__price">${meal.price.toFixed(2)}</p>
        <p className="meal-card__category">{meal.category}</p>
      </div>
    </div>
  );
};

export default MealCard;
