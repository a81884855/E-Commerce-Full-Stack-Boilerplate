import React, { useState } from "react";
import ShopTopBar from "./ShopTopBar";
import Products from "./Products";
import Pagination from "./Pagination";

const ProductArea = () => {
  return (
    <>
      <ShopTopBar />
      <Products />
      <Pagination />
    </>
  );
};

export default ProductArea;
