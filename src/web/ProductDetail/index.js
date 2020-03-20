import React from "react";
import Header from "../Header";
import ProductArea from "./ProductArea";
import { useParams } from "react-router-dom";

const Product = () => {
  const { name } = useParams();
  return (
    <div className="productDetail">
      <Header />
      <ProductArea productName={name} />
    </div>
  );
};

export default Product;
