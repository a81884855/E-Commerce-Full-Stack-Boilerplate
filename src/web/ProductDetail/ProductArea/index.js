import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import SlickTrack from "./SlickTrack";

const productInfo = {
  images: [
    "/images/products/Hand White Lace Skater Dress1.jpg",
    "/images/products/Hand White Lace Skater Dress2.jpg",
    "/images/products/Hand White Lace Skater Dress3.jpg",
    "/images/products/Hand White Lace Skater Dress4.jpg",
    "/images/products/Hand White Lace Skater Dress1.jpg",
    "/images/products/Hand White Lace Skater Dress2.jpg",
    "/images/products/Hand White Lace Skater Dress3.jpg",
    "/images/products/Hand White Lace Skater Dress4.jpg"
  ]
};

const ProductArea = ({ productName }) => {
  return (
    <div className="pt-120 ps-2vw">
      <Breadcrumb className=" mt-10 pt-40 pb-30">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Shop
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
      </Breadcrumb>
      <SlickTrack images={productInfo.images} />
    </div>
  );
};

export default ProductArea;
