import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import SideBar from "./Sidebar";

const Shop = () => {
  return (
    <div className="shop ps-2vw pt-120 ">
      <div className="header">
        <h1>Welcome!</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Shop
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Container className="shop-area  pt-80">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="product-area"></div>
      </Container>
    </div>
  );
};

export default Shop;
