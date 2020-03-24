/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Context as ProductContext } from "../../../context/ProductDetail";
import { FaHeart, FaCarAlt, FaRuler } from "react-icons/fa";
import { MdCompareArrows, MdLocationOn } from "react-icons/md";
import SocialLink from "../../../Components/SocialLink";

const Content = () => {
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
      star
    }
  } = useContext(ProductContext);

  const display = num => {
    let result = [];
    while (num > 0) {
      if (result.length === 5) break;
      if (num > 1) {
        result.push("star");
        num -= 1;
      } else if (num > 0.5) {
        result.push("half-star");
        num -= 0.5;
      } else {
        result.push("empty-star");
      }
    }
    return result;
  };

  return (
    <div className="content">
      <h5>{name}</h5>
      <div className="customer-review mt-10">
        {display(star).map((id, i) =>
          id === "half-star" ? (
            <IoMdStarHalf id="star" key={id + i} />
          ) : (
            <IoMdStar id={id} key={id + i} />
          )
        )}
        <p>(1 customer review)</p>
      </div>

      <h3 className="mt-30 mb-30">{price}</h3>
      <ul className="categories">
        <li className="mt-6">Composition: {composition}</li>
        <li className="mt-6">Filling: {filling}</li>
        <li className="mt-6">Hood fur: {hood_fur}</li>
      </ul>
      <div className="product-details-action-wrap">
        <div className="button">-</div>
        <span className="number">2</span>
        <div className="button">+</div>
        <div className="product-details-cart hover">Add to cart</div>
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
          {categories.map(category => (
            <span key={category}>
              <a href="#">{category}</a>,
            </span>
          ))}
        </div>
        <div className="mt-6">
          <span className="bold">Tags: </span>
          {tags.map(tag => (
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
