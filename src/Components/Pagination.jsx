import React from "react";

const Pagination = ({ setPages, pages }) => {
  const handleNextPage = () => {
    setPages((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPages((prev) => prev - 1);
  };
  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={pages <= 1}>
        Prev
      </button>
      <p>Page {pages}</p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
