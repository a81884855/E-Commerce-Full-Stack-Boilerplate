import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../Components/Product";
import useDimensions from "react-use-dimensions";

const ProductArea = ({ products, title }) => {
  const [index, setIndex] = useState(0);
  const [ref, { width }] = useDimensions();

  return (
    <>
      <Row className="productMainArea">
        <Col md={12} className="section-title-1 mb-55">
          <h2>{title}</h2>
        </Col>
        <div
          className="wrapper"
          style={{
            transform: `translateX(${-width * index}px)`,
          }}
        >
          {products.map((product, i) => (
            <Col
              md={4}
              sm={12}
              xs={12}
              key={product + i}
              style={{
                maxWidth: "100vw",
              }}
              className={`mt-40 ps-15 ${i === index + 1 ? "active" : ""}`}
              ref={ref}
            >
              <Product
                image={[
                  `/images/products/${product}1.jpeg`,
                  `/images/products/${product}2.jpeg`,
                ]}
                name={product}
                bold
              />
            </Col>
          ))}
        </div>
      </Row>

      <div className="slider-dots-container">
        <ul className="slider-dots">
          {products.slice(0, 4).map((product, index) => (
            <li key={product + index}>
              <button onClick={() => setIndex(index)}>0{index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductArea;
