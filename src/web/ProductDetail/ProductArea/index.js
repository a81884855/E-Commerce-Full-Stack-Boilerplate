import React, { useContext, useEffect } from "react";
import { Breadcrumb, Row, Col, Image } from "react-bootstrap";
import SlickTrack from "./SlickTrack";
import Content from "./Content";
import { Context as ProductContext } from "../../../context/ProductDetail";

const ProductArea = ({ productName }) => {
  const {
    state: { images, selected },
    fetchProduct
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="pt-120">
      <Breadcrumb className="mt-10 pt-40 pb-30">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Shop
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col className="d-none d-lg-block" lg={1}>
          <SlickTrack />
        </Col>
        <Col>
          <Row>
            <Col className=" mt-30" xs={12} sm={5} md={5} lg={5}>
              <Image src={images[selected]} />
            </Col>
            <Col className="mt-30" xs={12} sm={7} md={7} lg={6}>
              <Content />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductArea;
