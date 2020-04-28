import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cookies, setCookie] = useCookies(["name"]);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct(cookies.cart);
  }, [cookies.cart]);

  return (
    <div className="sideList-cart">
      <h5>Shopping Cart</h5>
      <div className="cart-content">
        <div className="cart-items">
          {products &&
            products.map((product, index) => (
              <div className="item" key={index}>
                <div className="img">
                  <img
                    src={`${
                      process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`
                    }${`/images/products/${product.name}1.jpeg`}`}
                    alt="product"
                  />
                </div>
                <div className="cart-title">
                  <Link to={`/product-detail/${product.name}`}>
                    {product.name}
                  </Link>
                  <p className="price">
                    {product.unit} x ${product.price}
                  </p>
                </div>
                <div
                  className="cart-delete"
                  onClick={() => {
                    setCookie("cart", [
                      ...products.slice(0, index),
                      ...products.slice(index + 1),
                    ]);
                    setProduct([
                      ...products.slice(0, index),
                      ...products.slice(index + 1),
                    ]);
                  }}
                >
                  x
                </div>
              </div>
            ))}
        </div>
        <h6 className="mb-30">
          Subtotal:{" "}
          <span className="cart-amount">
            $
            {products
              ? products.reduce(
                  (accum, curr) => accum + curr.price * curr.unit,
                  0
                )
              : 0}
          </span>
        </h6>
        <div className="cart-checkout-btn">
          <Link to="/">View Cart</Link>
        </div>
        <div className="cart-checkout-btn">
          <Link to="/">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
