import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../Components/Product";

const newArrival = [
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Wrap Coat",
  "Men's Lightweight Windbreaker"
];

const Products = () => {
  return (
    <Row>
      {newArrival.map((product, i) => (
        <Col lg={4} md={6} xs={12} className="mt-10 ps-15">
          <Product
            image={[
              `/images/products/${product}1.jpeg`,
              `/images/products/${product}2.jpeg`
            ]}
            name={product}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Products;
