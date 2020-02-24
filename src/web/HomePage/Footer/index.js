import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="main pt-80 pb-55 ps-2vw">
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col className="relevance-links" md={12} lg={7}>
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
          <a className="icon facebook" href="/">
            <FaFacebookF />
          </a>
          <a className="icon twitter" href="/">
            <FaTwitter />
          </a>
          <a className="icon instagram" href="/">
            <FaInstagram />
          </a>
          <a className="icon youtube" href="/">
            <IoLogoYoutube />
          </a>
        </Col>
      </Row>
      <p className="right-reserved">© 2020 F3shion All rights reserved</p>
    </div>
  );
};

export default Footer;
