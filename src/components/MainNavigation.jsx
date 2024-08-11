import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Food Discovery
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(isActive) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/meals"
                  className={(isActive) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  Meals
                </NavLink>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <button onClick={handleShow} className="btn btn-danger mx-2">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <LoginForm show={showModal} handleClose={handleClose} />
      <SignupForm show={showSignup} handleClose={handleCloseSignup} />
    </div>
  );
};

export default MainNavigation;
