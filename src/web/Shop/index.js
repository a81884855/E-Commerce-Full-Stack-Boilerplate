import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import SideBar from "./Sidebar";
import ProductArea from "./ProductArea";
import Footer from "./Footer";

const Shop = () => {
  return (
    <div className="shop ps-2vw pt-120 ">
      <div className="header">
        <h1>Welcome!</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/shop" active>
            Shop
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="shop-area  pt-80">
        <Col
          className="side-bar"
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 3, order: 1 }}
        >
          <SideBar />
        </Col>
        <Col
          className="product-area ps-4vw pb-100 "
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 9, order: 2 }}
        >
          <ProductArea />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Shop;
