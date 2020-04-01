import React from "react";
import ProductArea from "./ProductArea";
import { useParams } from "react-router-dom";
import Footer from "../Shop/Footer";

const Product = () => {
  const { name } = useParams();
  return (
    <div className="productDetail ps-4vw">
      <ProductArea productName={name} />
      <Footer />
    </div>
  );
};

export default Product;
