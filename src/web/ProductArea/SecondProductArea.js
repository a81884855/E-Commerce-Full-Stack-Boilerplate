import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../Components/Product";

const SecondProductArea = ({ products, title }) => {
  return (
    <>
      <Row className="productMainArea mb-40">
        <div className="section-title-1 mb-55">
          <h2>{title}</h2>
        </div>
        {products.map((product, i) => (
          <Col md={4} sm={12} xs={12} key={product + i}>
            <Product
              image={[
                `/images/products/${product}1.jpeg`,
                `/images/products/${product}2.jpeg`
              ]}
              name={product}
              center={true}
            />
          </Col>
        ))}
      </Row>
      <div className="btn-style-1">
        <a className="btn-border hvr-bounce-to-top" href="/" alt="">
          View all products
        </a>
      </div>
    </>
  );
};

export default SecondProductArea;
