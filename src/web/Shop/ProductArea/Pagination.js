import React, { useState } from "react";

const Pagination = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="pagination">
      <span>1</span>
      <span>2</span>
      <span>></span>
    </div>
  );
};

export default Pagination;
