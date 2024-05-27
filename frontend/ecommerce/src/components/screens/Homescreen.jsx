import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";

function Homescreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://127.0.0.1:8000/ecom/products/");
        console.log(response)
        console.log("response")
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1 className="text-center">Latest Products</h1>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;
