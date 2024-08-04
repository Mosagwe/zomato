import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";

const FoodListings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const fetchMeals = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:5002/api/v1/products"
    //     );
    //     setProducts(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error("Error fetching meals: ", error);
    //   }
    // };
    // fetchMeals();
    fetch("http://localhost:5002/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Quick Searches</h2>
      <div className="row">
        {products.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
        {/* {products.map((product) => {
          return (
            <div className="col-md-4">
              <div className="card quick-searches">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ width: 400, height: 300 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default FoodListings;
