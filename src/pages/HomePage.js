import React from "react";
import "../App.css";
import Header from "../components/Header";

import QuickSearch from "../components/QuickSearch";

import { Container } from "react-bootstrap";
import CategoriesList from "../components/categories/CategoriesList";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />
      <main className="py-3">
        <Container>
          <div className="alert alert-dark" role="alert">
            <h4 className="alert-heading">India needs oxygen</h4>
            <p>
              Donate to help us provide oxygen concentrators to hospitals{" "}
              <a href="#" className="alert-link">
                Learn more
              </a>
              .
            </p>
          </div>
          {/* <FoodList/> */}
          <CategoriesList />
        </Container>
      </main>
    </div>
  );
};

export default HomePage;
