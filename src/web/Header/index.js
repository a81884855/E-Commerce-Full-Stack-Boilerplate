import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Col } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch, IoMdMenu, IoMdHeartEmpty } from "react-icons/io";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideList from "./sidebarList";

export default function Header() {
  const [open, setOpen] = useState(false);
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
        {SideList()}
      </SwipeableDrawer>
    </div>
  );
}
