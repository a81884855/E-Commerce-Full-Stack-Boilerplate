import React from "react";
import { Row, Col } from "react-bootstrap";

export const SubscribeArea = () => {
  return (
    <Row className="justify-content-center subscribeArea pt-80 pb-75">
      <Col md={4} sm={12}>
        <h1>Sign up & save</h1>
        <p>Sale up to 20% off for your next purchase in this month!</p>
      </Col>
      <Col md={8} sm={12}>
        <input />
      </Col>
    </Row>
  );
};
