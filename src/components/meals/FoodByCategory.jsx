import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import FoodItem from "./FoodItem";
import Loader from "../Loader";

const FoodByCategory = () => {
  const { categoryname } = useParams();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodsByCategory = async () => {
      setLoading(true);
      try {
        const lowercasedCategory = categoryname.toString().toLowerCase();
        // Convert to lowercase

        const response = await axios.get(
          "http://localhost:5002/api/v1/products",
          {
            params: { category: lowercasedCategory },
          }
        );
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodsByCategory();
  }, [categoryname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Available {categoryname ? categoryname : "All"} Meals</h1>
          <Row>
            {foods.map((food) => (
              <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
                <FoodItem key={food._id} food={food} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default FoodByCategory;
