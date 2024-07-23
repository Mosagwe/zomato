import React from "react";
import "../App.css";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />

      {/* Promotional Section */}
      <div className="container mt-5">
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
      </div>

      {/* Quick Searches Section */}
      <div className="container mt-5">
        <h2>Quick Searches</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card quick-searches">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Breakfast"
              />
              <div className="card-body">
                <h5 className="card-title">Breakfast</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card quick-searches">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Lunch"
              />
              <div className="card-body">
                <h5 className="card-title">Lunch</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card quick-searches">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Dinner"
              />
              <div className="card-body">
                <h5 className="card-title">Dinner</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card quick-searches mt-4">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Snacks"
              />
              <div className="card-body">
                <h5 className="card-title">Snacks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card quick-searches mt-4">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Drinks"
              />
              <div className="card-body">
                <h5 className="card-title">Drinks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card quick-searches mt-4">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Nightlife"
              />
              <div className="card-body">
                <h5 className="card-title">Nightlife</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
