import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const footer = () => {
  return (
    <Row className="footer pt-80 pb-55">
      <Col>
        <img src={logo} className="App-logo" alt="logo" />
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
  );
};

export default footer;
