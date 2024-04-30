import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./screens/Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body as="div">
        <a href={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="div">
          <h5> ksh:{product.price}</h5>
        </Card.Text>
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#FFFF00"}
        />
      </Card.Body>
    </Card>
  );
}

export default Product;
