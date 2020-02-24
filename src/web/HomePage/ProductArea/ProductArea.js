import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../Components/Product";

const ProductArea = ({ products, title }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Row className="productMainArea">
        <Col md={12} className="section-title-1 mb-55">
          <h2>{title}</h2>
        </Col>
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
                name={product}
              />
            </Col>
          ))}
        </div>
      </Row>

      <div className="slider-dots-container">
        <ul className="slider-dots d-none d-md-inline-block">
          {products.slice(0, 4).map((product, index) => (
            <li key={product + index}>
              <button onClick={() => setIndex(index)}>0{index + 1}</button>
            </li>
          ))}
        </ul>

        <ul className="slider-dots d-inline-block d-md-none">
          {products.slice(0, 4).map((product, index) => (
            <li key={product + index}>
              <button onClick={() => setIndex(index * 3)}>0{index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductArea;
