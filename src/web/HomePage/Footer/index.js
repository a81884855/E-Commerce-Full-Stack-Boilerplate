import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import SocialLink from "../../../Components/SocialLink";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="main pt-80 pb-55">
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col
          className="relevance-links d-sm-inline-block  d-lg-inline-flex"
          md={12}
          lg={7}
        >
          <div>
            <a href="/">About US</a>
          </div>
          <div>
            <a href="/">Help Center</a>
          </div>
          <div>
            <a href="/">Our team</a>
          </div>
          <div>
            <a href="/">Privacy policy</a>
          </div>
          <div>
            <a href="/">The blog</a>
          </div>
        </Col>
        <Col className="social-link">
          <SocialLink facebook twitter googlePlus youtube />
        </Col>
      </Row>
      <p className="right-reserved">© 2020 F3shion All rights reserved</p>
    </div>
  );
};

export default Footer;
