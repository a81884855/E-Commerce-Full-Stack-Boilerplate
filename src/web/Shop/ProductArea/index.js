import React, { useContext, useEffect } from "react";
import ShopTopBar from "./ShopTopBar";
import Products from "./Products";
import Pagination from "./Pagination";
import { Context as ProductContext } from "../../../context/ProductContext";

const ProductArea = () => {
  const {
    state: { products, pagesRange, currentPage },
    fetchProducts,
    changePagesRange,
    changePage
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ShopTopBar
        products={products}
        pagesRange={pagesRange}
        changePagesRange={changePagesRange}
      />
      <Products products={products} />
      <Pagination
        pageNum={Math.ceil(products.length / pagesRange)}
        changePage={changePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductArea;
