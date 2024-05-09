import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import Rating from "./Rating";

function ProductScreen() {
  const { id } = useParams(); // Use useParams to get the id parameter
  const [product, setProduct] = useState(null); // Initialize product state with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/ecom/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]); // Include id in the dependency array

  // Render loading state if product is null
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#FFFF00"}
              />
            </ListGroup.Item>
            <ListGroup.Item>price : ksh{product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>price :</Col>
                  <Col>
                    <strong>Ksh {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>status :</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {product.name}
    </div>
  );
}

export default ProductScreen;
