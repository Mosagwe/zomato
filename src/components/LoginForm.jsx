import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignupForm from "./SignupForm";

const LoginForm = ({ show, handleClose }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [showSignup, setShowSignup] = useState(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  //const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post(
        "http://localhost:5002/api/v1/auth/login",
        { email, password }
      );
      if (data.error) {
        console.log(data.error);
      } else {
        setData({});
        console.log("Login Successful");
      }
    } catch (err) {
      console.log(err);
    }

    // .then((result) => {
    //   console.log(result);
    //   if (result.data === "Success") {
    //     // navigate("/home")
    //   } else {
    //     //navigate("/register")
    //     alert("You are not registered to this service");
    //   }
    // })
    // .catch((err) =>
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In With</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" className="btn btn-block" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        Don't have an acccount?{" "}
        <Button className="btn btn-link" onClick={handleShowSignup}>
          Sign Up Now
        </Button>
      </Modal.Footer>
      <SignupForm show={showSignup} handleClose={handleCloseSignup} />
    </Modal>
  );
};

export default LoginForm;
