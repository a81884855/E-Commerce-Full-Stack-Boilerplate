import React from "react";

import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import amex from "../../assets/amex.png";
import paypal from "../../assets/paypal.png";
import SocialLink from "../../Components/SocialLink";

const SideList = () => (
  <div className="sideList">
    <div className="list pb-40 d-none d-lg-block">
      <div>About Us</div>
      <div>Help Center</div>
      <div>Collection</div>
      <div>Blog</div>
      <div>New Look</div>
    </div>

    <div className="list pb-40 d-lg-none">
      <div>Home</div>
      <div>Clothing</div>
      <div>Shoes</div>
      <div>Accesories</div>
      <div>Sales</div>
      <div>About Us</div>
    </div>

    <div className="payment">
      <div className="payment-container">
        <img src={visa} className="payment-logo" alt="visa" />
        <img src={mastercard} className="payment-logo" alt="mastercard" />
        <img src={amex} className="payment-logo" alt="amex" />
        <img src={paypal} className="payment-logo" alt="paypal" />
      </div>

      <p>
        Malesuada mauris. Sed scelerisque felis vel rutrum dignissim. Vivamus
        euismod mi at gravida tincidunt. Vivamus sit amet luctus nisi. Vivamus
        pretium purus eget ante placerat malesuada.
      </p>
    </div>

    <div className="social-link">
      <SocialLink facebook twitter googlePlus youtube />
    </div>

    <p className="rightReversed">© 2020 All rights reserved</p>
  </div>
);

export default SideList;
