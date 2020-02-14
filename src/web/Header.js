import React from "react";
import logo from "../assets/logo.png";
import { Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch, IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="nav-container">
      <Col xl={2} lg={2} md={6} sm={6} xs={6}>
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </Col>
      <Col className="d-none d-lg-block" xl={8} lg={8}>
        <Nav className="justify-content-center">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
          <FaRegHeart />
        </a>
        <a href="/">
          <AiOutlineShopping />
        </a>
        <a href="/">
          <IoIosSearch />
        </a>
        <a href="/">
          <IoMdMenu />
        </a>
      </Col>
    </div>
  );
}