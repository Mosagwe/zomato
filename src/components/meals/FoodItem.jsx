import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useCart } from "../../hooks/useCart";

const FoodItem = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(food);
  };

  

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${food._id}`}>
        <Card.Img
          src={food.imageUrl}
          variant="top"
          style={{ width: 280, height: 220 }}
        />
      </a>
      <Card.Body>
        <a href={`/products/${food._id}`}>
          <Card.Title as="div">
            <strong>{food.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">${food.price}</Card.Text>
        <button
          onClick={handleAddToCart}
          className="btn btn-danger btn-block"
          style={{ borderRadius: "10rem", outline: "none" }}
        >
          Add to Cart
        </button>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;
