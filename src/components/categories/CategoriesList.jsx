import React, { useEffect, useState } from "react";
//import foods from "../foods.js";
//import axios from "axios"
import { Col, Row } from "react-bootstrap";
import CategoryItem from "./CategoryItem.jsx";

import Loader from "../Loader.jsx";

import { useGetCategoriesQuery } from "../../slices/categoriesApiSlice.js";
import Message from "../Message.jsx";

const CategoriesList = () => {
  //const [foods,setFoods]=useState([])

  // useEffect(()=>{
  //     const fetchMeals=async()=>{
  //         const response= await axios.get('http://localhost:5002/api/v1/products')
  //         setFoods(response.data.data)
  //     }
  //     fetchMeals();
  // },[])
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Available Meals</h1>
          <Row>
            {categories.map((category) => (
              <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
                <CategoryItem category={category} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default CategoriesList;
