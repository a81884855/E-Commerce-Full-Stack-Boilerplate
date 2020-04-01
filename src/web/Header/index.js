import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Col } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch, IoMdMenu, IoMdHeartEmpty } from "react-icons/io";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import amex from "../../assets/amex.png";
import paypal from "../../assets/paypal.png";
import SocialLink from "../../Components/SocialLink";

export default function Header() {
  const [open, setOpen] = useState(true);
  return (
    <div className="nav-container ps-2vw">
      <Col xl={1} lg={1} md={6} sm={6} xs={6}>
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </Col>
      <Col className="nav-main-menu d-none d-lg-block" xl={9} lg={9}>
        <Nav className="justify-content-center">
          <Nav.Link className="underline" href="#features">
            New
          </Nav.Link>
          <Nav.Link href="#pricing">Clothing</Nav.Link>
          <Nav.Link href="#pricing">Shoes</Nav.Link>
          <Nav.Link href="#pricing">Accessirues</Nav.Link>
          <Nav.Link href="#pricing">Sales</Nav.Link>
          <Nav.Link href="#pricing">About US</Nav.Link>
        </Nav>
      </Col>

      <Col
        className="ml-auto nav-header-right"
        xl={2}
        lg={2}
        md={6}
        sm={6}
        xs={6}
      >
        <a href="/">
          <IoMdHeartEmpty />
        </a>
        <a href="/">
          <AiOutlineShopping />
        </a>
        <a href="/">
          <IoIosSearch />
        </a>
        <a onClick={() => setOpen(true)}>
          <IoMdMenu />
        </a>
      </Col>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

const sideList = () => (
  <div className="sideList" role="presentation">
    <div className="list pb-40">
      <div>About Me</div>
      <div>Help Center</div>
      <div>Collection</div>
      <div>Blog</div>
      <div>New Look</div>
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
  </div>
);
