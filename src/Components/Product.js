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

const Product = ({ image }) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="product-container"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <div
        className="image-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {focus ? (
          <div className="product-action">
            {actions.map(action => (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={action}>{action}</Tooltip>}
              >
                <a className="" href="/">
                  {iconSelector(action)}
                </a>
              </OverlayTrigger>
            ))}
          </div>
        ) : null}
        <img
          className={hover ? "hover" : "non-hover"}
          alt=""
          src={hover ? image[0] : image[1]}
        />
      </div>
    </div>
  );
};

export default Product;
