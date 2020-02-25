import React from "react";
import background from "../../../assets/background.jpg";
import CountDown from "./CountDown";

const DiscountArea = () => {
  return (
    <div className="discountArea">
      <img className="backgroundImage" alt="" src={background} />

      <div className="content">
        <p>LIMIT EDITION SHIMMIRY SKITRT</p>
        <h1>OFF 30%</h1>

        <CountDown />
        <div className="btn-style-1 mt-70 ">
          <a className="btn-border hvr-bounce-to-top" href="/" alt="">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscountArea;
