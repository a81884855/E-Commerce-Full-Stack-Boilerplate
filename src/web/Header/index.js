import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Col } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch, IoMdMenu, IoMdHeartEmpty } from "react-icons/io";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideList from "./sidebarList";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
  return (
    <div className="nav-container ps-2vw">
      <Col xl={1} lg={1} md={6} sm={6} xs={6}>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Navbar.Brand>
      </Col>
      <Col className="nav-main-menu d-none d-lg-block" xl={9} lg={9}>
        <Nav className="justify-content-center">
          <Link className="underline" to="/shop">
            New
          </Link>
          <Link to="/shop">Clothing</Link>
          <Link to="/shop">Shoes</Link>
          <Link to="/shop">Accessirues</Link>
          <Link to="/shop">Sales</Link>
          <Link to="/shop">About US</Link>
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
        <span>
          <IoMdHeartEmpty />
        </span>
        <span
          onClick={() => {
            setOpen(true);
            setTarget("cart");
          }}
        >
          <AiOutlineShopping />
        </span>
        <span>
          <IoIosSearch />
        </span>
        <span
          onClick={() => {
            setOpen(true);
            setTarget("menu");
          }}
        >
          <IoMdMenu />
        </span>
      </Col>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
          setTarget(null);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        {SideList(target)}
      </SwipeableDrawer>
    </div>
  );
}
