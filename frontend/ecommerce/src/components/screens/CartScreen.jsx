import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

function CartScreen({ cart = [], updateCart, handleCheckout }) {
  const [shippingAddress, setShippingAddress] = useState("");

  const handleQuantityChange = (productId, quantity) => {
    updateCart(productId, quantity);
  };

  const handleRemoveFromCart = (productId) => {
    updateCart(productId, 0);
  };

  const totalPrice =
    cart.length > 0
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={8}>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item.id}>
                  {/* ... Rest of the cart item rendering */}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal (
                  {cart.reduce((total, item) => total + item.quantity, 0)})
                  items
                </h3>
                Ksh {totalPrice}
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Group controlId="shippingAddress">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter shipping address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                  />
                </Form.Group>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.length === 0}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartScreen;
