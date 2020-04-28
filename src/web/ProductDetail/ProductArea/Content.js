/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import { Context as ProductContext } from "../../../context/ProductDetail";
import { FaHeart, FaCarAlt, FaRuler } from "react-icons/fa";
import { MdCompareArrows, MdLocationOn } from "react-icons/md";
import SocialLink from "../../../Components/SocialLink";
import { useCookies } from "react-cookie";

const Content = () => {
  const [cookies, setCookie] = useCookies(["cart"]);
  const [fly, setFly] = useState(false);

  const {
    state: {
      name,
      composition,
      filling,
      hood_fur,
      price,
      SKU,
      categories,
      tags,
      star,
      unit,
    },
    fetchProduct,
    changeUnit,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    let cart = [...cookies.cart];
    for (let product of cart) {
      if (product.name === name) {
        product.unit += unit;
      }
      return setCookie("cart", [...cart]);
    }

    setCookie("cart", [
      ...cart,
      {
        name,
        price,
        unit,
      },
    ]);
  };

  const flyToCart = () => {
    setFly(true);
    setTimeout(() => setFly(false), 700);
  };

  console.log(fly);
  return (
    <div className="content">
      <h5>{name}</h5>
      <div className="customer-review mt-10">
        <Rating name="half-rating-read" value={star} precision={0.5} readOnly />
        <span id="number">
          <p>(1 customer review)</p>
        </span>
      </div>

      <h3 className="mt-30 mb-30">${price.toFixed(2)}</h3>
      <ul className="categories">
        <li className="mt-6">Composition: {composition}</li>
        <li className="mt-6">Filling: {filling}</li>
        <li className="mt-6">Hood fur: {hood_fur}</li>
      </ul>
      <div className="product-details-action-wrap">
        <div className="button" onClick={() => changeUnit(-1)}>
          -
        </div>
        <span className="number">{unit}</span>
        <div className="button" onClick={() => changeUnit(1)}>
          +
        </div>
        <div
          className="product-details-cart hover"
          onClick={() => {
            addToCart();
            flyToCart();
          }}
        >
          Add to cart
          <div className={`fly ${fly ? "fly-animated" : ""}`}></div>
        </div>
        <div className="product-details hover">
          <FaHeart />
        </div>
        <div className="product-details hover">
          <MdCompareArrows />
        </div>
      </div>

      <div className="product-details-info">
        <a className="hover" href="#">
          <MdLocationOn />
          Store availability
        </a>
        <a className="hover" href="#">
          <FaCarAlt />
          Delivery and return
        </a>
        <a className="hover" href="#">
          <FaRuler />
          Size Guide
        </a>
      </div>

      <div className="product-details-meta">
        <div className="mt-6">
          <span className="bold">SKU: </span>
          {SKU}
        </div>
        <div className="mt-6">
          <span className="bold">Categories: </span>
          {categories.map((category) => (
            <span key={category}>
              <a href="#">{category}</a>,
            </span>
          ))}
        </div>
        <div className="mt-6">
          <span className="bold">Tags: </span>
          {tags.map((tag) => (
            <span key={tag}>
              <a href="#">{tag}</a>,
            </span>
          ))}
        </div>
        <div className="mt-30">
          <SocialLink facebook pinterest googlePlus twitter />
        </div>
      </div>
    </div>
  );
};

export default Content;
