import React, { useContext, useEffect } from "react";
import { Breadcrumb, Row, Col, Image } from "react-bootstrap";
import SlickTrack from "./SlickTrack";
import Content from "./Content";
import AdditonalContent from "./AdditionalContent";
import { Context as ProductContext } from "../../../context/ProductDetail";
import RelatedProducts from "./RelatedProducts";

const ProductArea = ({ productName }) => {
  const {
    state: { images, selected },
    fetchProduct,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="pt-120">
      <Breadcrumb className="mt-10 pt-40 pb-30">
        <Breadcrumb.Item href="/#/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/#/shop">Shop</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          {productName}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row className="pb-100">
        <Col className="d-none d-lg-block" lg={1}>
          <SlickTrack />
        </Col>
        <Col>
          <Row>
            <Col className=" mt-30" sm={12} md={6} lg={6} xl={5}>
              <Image
                style={{
                  maxHeight: 650,
                  objectFit: "contain",
                }}
                src={`${
                  process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`
                }${images[selected]}`}
              />
            </Col>
            <Col className="mt-30" sm={12} md={6} lg={6}>
              <Content />
            </Col>
          </Row>
        </Col>
      </Row>

      <AdditonalContent />
      <RelatedProducts title="You may also like" />
      <RelatedProducts title="Related Products" />
    </div>
  );
};

export default ProductArea;
