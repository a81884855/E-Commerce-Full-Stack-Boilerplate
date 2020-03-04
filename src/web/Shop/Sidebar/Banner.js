import React, { useState } from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="banner"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => (window.location.href = "/")}
    >
      <div id="content">
        <h4>More Jackets</h4>
        <h2>off 25%</h2>
      </div>
      <img className={hover ? "active" : ""} alt="banner" src={banner} />
    </div>
  );
};

export default Banner;
