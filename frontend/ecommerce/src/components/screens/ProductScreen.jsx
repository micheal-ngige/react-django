import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import products from "../../Products";

function ProductScreen({ match }) {

  const product = products.find((p) => p._id == match.params.id);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}


export default ProductScreen;
