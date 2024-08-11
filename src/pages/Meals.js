import React from "react";
import FoodByCategory from "../components/meals/FoodByCategory";
import { Container } from "react-bootstrap";

const MealsPage = () => {
  return (
    <>
      <Container>
        <FoodByCategory />
      </Container>
    </>
  );
};

export default MealsPage;
