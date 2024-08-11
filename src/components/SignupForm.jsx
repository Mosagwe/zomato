import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const initialState = {name:"" ,email: "", password: "" };

const SignupForm = ({ show, handleClose }) => {
  const [data, setData] = useState(initialState);

  const registerUser = async (e) => {
    e.preventDefault();
    const { name,email, password } = data;
   
    try {
      const { data } = await axios.post(
        "http://localhost:5002/api/v1/auth/signup",
        {name, email, password }
      );
      if (data.error) {
        console.log(data.error);
      } else {
        setData({});
        handleClose()
      }
    } catch (err) {
      console.log("Error occured ", err.error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={registerUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
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

export default SignupForm;
