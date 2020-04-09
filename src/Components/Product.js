import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { FaRegEye, FaHeart } from "react-icons/fa";
import { MdCompareArrows, MdShoppingCart } from "react-icons/md";

const actions = [
  "Quick Shop",
  "Add to Wishlist",
  "Add to Compare",
  "Add to Cart"
];

const iconSelector = name => {
  switch (name) {
    case "Quick Shop":
      return <FaRegEye />;
    case "Add to Wishlist":
      return <FaHeart />;
    case "Add to Compare":
      return <MdCompareArrows />;
    case "Add to Cart":
      return <MdShoppingCart />;
    default:
      return null;
  }
};

const Product = ({ image, name, center = false, bold = false }) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="product-container"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onMouseDown={() => window.location.replace(`/product-detail/${name}`)}
    >
      <div
        className="image-container mb-40"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="product-action">
          {actions.map((action, i) => (
            <OverlayTrigger
              key={action}
              placement="top"
              overlay={<Tooltip id={action}>{action}</Tooltip>}
            >
              <a
                style={{
                  animation: focus
                    ? `fade-in-right 0.${5 + i}s ease`
                    : `fade-out-right 0.${8 - i}s ease`,
                  opacity: focus ? 1 : 0,
                  display: focus ? "" : "none"
                }}
                href="/"
              >
                {iconSelector(action)}
              </a>
            </OverlayTrigger>
          ))}
        </div>

        <img
          className={hover ? "hover" : "non-hover"}
          alt=""
          src={hover ? image[1] : image[0]}
        />
      </div>

      <div className={`product-content mb-40 ${center ? "text-center" : ""}`}>
        <a href="/">
          <p
            style={{
              fontSize: bold ? 25 : 16,
              fontWeight: 600
            }}
          >
            {name}
          </p>
        </a>
        <p>$price</p>
      </div>
    </div>
  );
};

export default Product;
