import React from "react";
import { Row, Col } from "react-bootstrap";

const Color = () => {
  return (
    <div className="color mt-40 mb-55">
      <h2>Color</h2>
      <Row className="color-container mt-40 mb-40">
        <Col xs={6}>
          <a href="/" alt="">
            Blue
          </a>
          <span>(8)</span>
        </Col>
        <Col xs={6}>
          <a href="/" alt="">
            Brown
          </a>
          <span>(8)</span>
        </Col>
        <Col xs={6}>
          <a href="/" alt="">
            Green
          </a>
          <span>(8)</span>
        </Col>
        <Col xs={6}>
          <a href="/" alt="">
            Pink
          </a>
          <span>(8)</span>
        </Col>
        <Col xs={6}>
          <a href="/" alt="">
            Violet
          </a>
          <span>(8)</span>
        </Col>
        <Col xs={6}>
          <a href="/" alt="">
            White
          </a>
          <span>(8)</span>
        </Col>
      </Row>
    </div>
  );
};

export default Color;
