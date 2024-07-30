import React from "react";
import "../../App.css";
import Header from "../Header";

import QuickSearch from "../QuickSearch";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
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
      <QuickSearch />
    </div>
  );
};

export default HomePage;
