import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
//import products from "../foods";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";

const ProductDetail = () => {
  //const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  //const productId =String(id)
  const {
    data: product = {},
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  console.log(product);
  //const product= data.find
  // const product = data.find((p) => String(p._id) === id);
  //   useEffect(() => {
  //     const fetchMeal = async () => {
  //       const response = await axios.get(
  //         `http://localhost:5002/api/v1/products/${productId}`
  //       );
  //       setProduct(response.data.data);
  //     };
  //     fetchMeal();
  //   }, []);

  return (
    <>
      <Container>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={5}>
            <Image src={product.imageUrl} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Details: {product.description}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "Available" : "Not Available"}
                    </strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
