import React, { useState, useEffect } from "react";

const Pagination = ({ pageNum, changePage, currentPage }) => {
  const [page, setPage] = useState([]);
  useEffect(() => {
    createPagination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const createPagination = num => {
    let temp = [];
    for (let i = 0; i < pageNum; i += 1) {
      temp.push(i + 1);
    }
    setPage(temp);
  };

  return (
    <div className="pagination">
      {page.map(num => (
        <span
          className={num === currentPage ? "active" : ""}
          key={num}
          onClick={() => changePage(num)}
        >
          {num}
        </span>
      ))}
      <span>></span>
    </div>
  );
};

export default Pagination;
