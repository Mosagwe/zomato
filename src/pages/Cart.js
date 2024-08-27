import React from "react";
import { useCart } from "../hooks/useCart";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart, totalCount } = useCart();

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup variant="flush">
          {cart.items.map((item, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col md={3}>
                  <Card.Img
                    src={item.food.imageUrl}
                    alt={item.food.name}
                    style={{ width: 150, height: 120 }}
                  />
                </Col>
                <Col md={3}>
                  <h5>{item.food.name}</h5>
                </Col>
                <Col md={2}>
                  <h5>{item.food.quantity}</h5>
                </Col>
                <Col md={2}>
                  <h5>${item.food.price}</h5>
                </Col>
                <Col md={2}>
                  <Button variant="danger">Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h2>Total Items: {totalCount}</h2>
    </Container>
  );
};

export default Cart;
