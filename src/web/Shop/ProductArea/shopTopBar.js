import React, { useState } from "react";
import { TiThLargeOutline, TiThListOutline } from "react-icons/ti";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ShopTopBar = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);

  return (
    <div className="shop-top-bar mt-40">
      <div className="bar-left">
        <span>Showing 1–12 of 39 results</span>
        <span className="d-none d-md-block shop-page-list">
          <span>Show</span>
          <span className="bar-btn">12</span>
          <span className="bar-btn">20</span>
          <span className="bar-btn">30</span>
        </span>
      </div>
      <div className="bar-right">
        <span className="bar-btn">
          <TiThLargeOutline />
        </span>
        <span className="bar-btn">
          <TiThListOutline />
        </span>
        <span
          onClick={() => setFilter(!filter)}
          className={`bar-btn ${filter ? "filter" : ""}`}
        >
          Filter {filter ? <FaAngleUp /> : <FaAngleDown />}
        </span>
        <span
          className="bar-btn"
          onMouseEnter={() => setSort(true)}
          onMouseLeave={() => setSort(false)}
        >
          Sort by {sort ? <FaAngleUp /> : <FaAngleDown />}
          <div className={`dropdown ${sort ? "active" : ""}`}>
            <div className="dropdown-option">Default Sorting</div>
            <div className="dropdown-option">Sort by polularity</div>
            <div className="dropdown-option">Sort by average rating</div>
            <div className="dropdown-option">Sort by latest</div>
            <div className="dropdown-option">Sort by price: low to high</div>
            <div className="dropdown-option">Sort by price: high to low</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ShopTopBar;
