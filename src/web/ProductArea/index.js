import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../Components/Product";

const products = [
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Wrap Coat",
  "Men's Lightweight Windbreaker"
];

const ProductArea = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="productArea pt-120 pb-120 ps-2vw">
      <Row className="productMainArea">
        <div className="section-title-1 mb-70">
          <h2>New Arrial</h2>
        </div>
        <div
          className="wrapper"
          style={{
            transform: `translateX(${index * -33}vw)`
          }}
        >
          {products.map((product, i) => (
            <Col
              md={4}
              sm={12}
              xs={12}
              key={product + i}
              className={`mt-40 ps-15 ${i === index + 1 ? "active" : ""}`}
            >
              <Product
                image={[
                  `/images/products/${product}1.jpeg`,
                  `/images/products/${product}2.jpeg`
                ]}
              />
            </Col>
          ))}
        </div>
      </Row>
      <div className="slider-dots-container">
        <ul className="slider-dots d-none d-md-inline-block">
          {products.map((product, index) => (
            <li key={product + index}>
              <button onClick={() => setIndex(index)}>0{index + 1}</button>
            </li>
          ))}
        </ul>

        <ul className="slider-dots d-inline-block d-md-none">
          {products.map((product, index) => (
            <li key={product + index}>
              <button onClick={() => setIndex(index * 3)}>0{index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductArea;
