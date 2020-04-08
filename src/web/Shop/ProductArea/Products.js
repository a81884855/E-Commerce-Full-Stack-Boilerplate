import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../Components/Product";

const Products = ({ products, currentPage, pagesRange }) => {
  return (
    <Row>
      {products
        .slice(pagesRange * (currentPage - 1), pagesRange * currentPage)
        .map((product, i) => (
          <Col
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className="mt-10 ps-15"
            key={product + i}
          >
            <Product
              image={[
                `/images/products/${product}1.jpeg`,
                `/images/products/${product}2.jpeg`
              ]}
              name={product}
            />
          </Col>
        ))}
    </Row>
  );
};

export default Products;
