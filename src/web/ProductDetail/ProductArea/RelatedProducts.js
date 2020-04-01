import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../Components/Product";

const recommendProducts = [
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Double-Breasted Water Resistant Hooded Trench Coat, Created"
];

const RelatedProducts = ({ title }) => {
  return (
    <div className="mt-30">
      <h2>{title}</h2>
      <Row className="pt-40">
        {recommendProducts.map((product, index) => (
          <Col
            className={
              index === 3
                ? "d-none d-xl-block"
                : index === 2
                ? "d-none d-lg-block"
                : index === 1
                ? "d-none d-sm-block"
                : ""
            }
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
      </Row>
    </div>
  );
};

export default RelatedProducts;
