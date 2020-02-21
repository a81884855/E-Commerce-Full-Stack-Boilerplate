import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

const SubscribeArea = () => {
  return (
    <Container className="mt-70 mb-40">
      <Row className="subscribe-area pt-80 pb-75">
        <Col
          className="subscribe-content text-lg-left text-md-center"
          lg={4}
          md={12}
        >
          <h1>Sign up & save</h1>
          <p>Sale up to 20% off for your next purchase in this month!</p>
        </Col>
        <Col className="email-container" lg={8} md={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Your email address"
              aria-label="Recipient's email address"
              aria-describedby="basic-addon2"
              className="email-input"
            />
            <InputGroup.Append>
              <button className="subscribe-btn">Subscribe</button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribeArea;
