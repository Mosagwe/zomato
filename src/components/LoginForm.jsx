import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ show, handleClose }) => {
    const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  //const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5002/api/v1/auth/login", { email, password })
    .then(result => {
        console.log(result)
        if(result.data === "Success"){
           // navigate("/home")
        }else{
            //navigate("/register")
            alert("You are not registered to this service")

        }
   
    })
    .catch(err => console.log(err))
}

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginForm;
