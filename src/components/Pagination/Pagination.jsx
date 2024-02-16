import { useEffect, useState } from 'react';

import './Pagination.scss';

const Pagination = ({ pageLimit, currentPage, setCurrentPage, totalPage }) => {
  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    const arr = [];
    const startPage = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    const endPage = Math.min(startPage + pageLimit - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      arr.push(i);
    }

    setPageArray(arr);
  }, [totalPage, currentPage, pageLimit]);

  return (
    <div className="pagination-container">
      <button
        className={`prv-btn`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1 && true}
      />
      <ul className="page-number-wrap">
        {pageArray.map((page, index) => {
          return (
            <li className="page-number-btn-list" key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`${currentPage - 1 === index ? 'active' : ''}`}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="next-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPage && true}
      />
    </div>
  );
};
export default Pagination;
