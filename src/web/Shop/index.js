import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import SideBar from "./Sidebar";
import ProductArea from "./ProductArea";

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

      <Row className="shop-area  pt-80">
        <Col className="side-bar" sm={12} md={3}>
          <SideBar />
        </Col>
        <Col className="product-area" sm={12} md={9}>
          <ProductArea />
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
