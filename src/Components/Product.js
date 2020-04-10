import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Tooltip,
  Modal,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import { FaRegEye, FaHeart } from "react-icons/fa";
import { MdCompareArrows, MdShoppingCart } from "react-icons/md";

import Content from "../web/ProductDetail/ProductArea/Content";

const actions = [
  "Quick Shop",
  "Add to Wishlist",
  "Add to Compare",
  "Add to Cart",
];

const Product = ({ image, name, center = false, bold = false }) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);

  const iconSelector = (name) => {
    switch (name) {
      case "Quick Shop":
        return (
          <div
            onMouseDown={() => {
              setShow(true);
              setFocus(false);
            }}
          >
            <FaRegEye />
          </div>
        );
      case "Add to Wishlist":
        return (
          <div>
            <FaHeart />
          </div>
        );
      case "Add to Compare":
        return (
          <div>
            <MdCompareArrows />
          </div>
        );
      case "Add to Cart":
        return (
          <div>
            <MdShoppingCart />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="product-container"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <div
        className="image-container mb-40"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="product-action"
          style={{
            animation: focus ? `fade-in-right 0.7s ease` : `fade-out-right`,
            display: focus ? "" : "none",
          }}
        >
          {actions.map((action, i) => (
            <OverlayTrigger
              key={action}
              placement="top"
              overlay={<Tooltip id={action}>{action}</Tooltip>}
            >
              {iconSelector(action)}
            </OverlayTrigger>
          ))}
        </div>
        <Link to={`/product-detail/${name}`}>
          <img
            className={hover ? "hover" : "non-hover"}
            alt=""
            src={
              hover
                ? `${process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`}${
                    image[1]
                  }`
                : `${process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`}${
                    image[0]
                  }`
            }
          />
        </Link>
      </div>

      <div className={`product-content mb-40 ${center ? "text-center" : ""}`}>
        <Link to="/">
          <p
            style={{
              fontSize: bold ? 25 : 16,
              fontWeight: 600,
            }}
          >
            {name}
          </p>
        </Link>
        <p>$price</p>
      </div>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col md={12} lg={6}>
              <Image
                src={`${
                  process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`
                }${image[0]}`}
              />
            </Col>
            <Col className="productDetail">
              <Content />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Product;
