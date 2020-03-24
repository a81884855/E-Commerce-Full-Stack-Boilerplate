import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import ReactMapGL, { Marker } from "react-map-gl";
import useDimensions from "react-use-dimensions";
import SocialLink from "../../../Components/SocialLink";

const Footer = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
    mapboxApiAccessToken:
      "pk.eyJ1IjoiYTgxODg0ODU1IiwiYSI6ImNrN2lubjU3ajAxaWoza21zanZrODFrZDEifQ.nhidbeEFA-brNAQRfbwL7w"
  });

  const [ref, { width }] = useDimensions();

  return (
    <Row className="footer pt-80 pb-55">
      <Col className="mb-30" lg={3} md={4}>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="about">
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptar
        </p>
        <SocialLink facebook twitter googlePlus youtube />
      </Col>
      <Col className="footer-widget" lg={2} sm={4}>
        <h6 className="mb-30">Company Link</h6>
        <div>
          <a href="/">Guides & Articles</a>
        </div>
        <div>
          <a href="/">Customer Reviews</a>
        </div>
        <div>
          <a href="/">Coupon Codes</a>
        </div>
        <div>
          <a href="/">Military Discount</a>
        </div>
      </Col>
      <Col className="footer-widget" lg={2} sm={4}>
        <h6 className="mb-30">Userful Link</h6>
        <div>
          <a href="/">About Us</a>
        </div>
        <div>
          <a href="/">Help Center</a>
        </div>
        <div>
          <a href="/">Our Team</a>
        </div>
        <div>
          <a href="/">Privacy Policy</a>
        </div>
        <div>
          <a href="/">The Blog</a>
        </div>
      </Col>
      <Col className="footer-widget" lg={2} sm={4}>
        <h6 className="mb-30">Contact info</h6>
        <div>
          <IoIosTimer className="icon" />
          Monday - Friday: 9:00 - 19:00
        </div>
        <div>
          <AiOutlineMail className="icon" />
          info@example.com
        </div>
        <div>
          <FiPhone className="icon" />
          (+612) 2531 5600
        </div>
        <div>
          <AiOutlineHome className="icon" />
          PO Box 1622 Colins Street West Victoria 8077 Australia
        </div>
      </Col>
      <Col id="map" ref={ref} lg={3} md={12} sm={12} xs={12}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height={width * 0.85}
          onViewportChange={setViewport}
        >
          <Marker
            latitude={37.76}
            longitude={-122.45}
            offsetLeft={-20}
            offsetTop={-10}
            className="icon"
          >
            <MdLocationOn />
          </Marker>
        </ReactMapGL>
      </Col>
    </Row>
  );
};

export default Footer;
