import React, { useState } from "react";
import { TiThLargeOutline, TiThListOutline } from "react-icons/ti";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const pageNum = [12, 20, 30];

const ShopTopBar = ({ products, changePagesRange, pagesRange }) => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);

  return (
    <div className="shop-top-bar mt-40">
      <div className="bar-left">
        <span>
          Showing 1 – {pagesRange} of {products.length} results
        </span>
        <span className="d-none d-md-block shop-page-list">
          <span>Show</span>
          {pageNum.map(num => (
            <span
              className="bar-btn"
              key={num}
              onClick={() => changePagesRange(num)}
            >
              {num}
            </span>
          ))}
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
