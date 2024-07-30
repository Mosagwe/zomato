import React, { useState } from "react";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Food Discovery
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Meals
                </a>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <button onClick={handleShow} className="btn btn-danger mx-2">
                Login
              </button>
              <a href="#" className="btn btn-primary mx-2">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <LoginForm show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
