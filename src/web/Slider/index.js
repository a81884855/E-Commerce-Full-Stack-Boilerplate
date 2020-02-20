import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";

const slider = [slider1, slider2];

const SliderArea = () => {
  const [index, setIndex] = useState(0);
  return (
    <Row className="slider-area pt-120 ps-2vw">
      <Col
        className="slider-info  pt-40"
        xs={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        md={{ span: 6, order: 1 }}
      >
        <p className="animated fadeInDown delay-1s">New Collection 2020</p>
        <h1 className="animated fadeInLeft delay-1dot5s">GLEAM</h1>
        <div className="animated fadeInUp delay-2s" id="link">
          Discover Now
        </div>

        <div className="dots-container">
          {slider.map((img, i) => (
            <div
              key={img}
              onClick={() => {
                setIndex(i);
              }}
              className="dot"
            >
              0{i + 1}
            </div>
          ))}
        </div>
      </Col>
      <Col
        xs={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        md={{ span: 6, order: 2 }}
      >
        {slider.map((img, i) => (
          <img
            key={img}
            className={i === index ? "opaque" : null}
            alt=""
            src={img}
          />
        ))}
      </Col>
    </Row>
  );
};

export default SliderArea;
