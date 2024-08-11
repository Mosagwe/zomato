import React, { useEffect, useState } from "react";
//import foods from "../foods.js";
//import axios from "axios"
import { Col, Row } from "react-bootstrap";
import FoodItem from "./FoodItem.jsx";
import { useGetProductsQuery } from "../../slices/productsApiSlice.js";
import Loader from "../Loader.jsx";
import Message from "../Message.jsx";

const FoodList = () => {
  //const [foods,setFoods]=useState([])

  // useEffect(()=>{
  //     const fetchMeals=async()=>{
  //         const response= await axios.get('http://localhost:5002/api/v1/products')
  //         setFoods(response.data.data)
  //     }
  //     fetchMeals();
  // },[])
  const { data: foods = [], isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Available Meals</h1>
          <Row>
            {foods.map((food) => (
              <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
                <FoodItem food={food} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default FoodList;
