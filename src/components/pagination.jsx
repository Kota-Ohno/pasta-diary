import React from "react";
import { Link } from "gatsby";
import { pagination, paginationLink, paginationLinkDisabled } from "./pagination.module.css";

const Pagination = ({ category, currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/blog/${category}` : `/blog/${category}${category === "" ? "" : "/"}${currentPage - 1}`;
  const nextPage = `/blog/${category}${category === "" ? "" : "/"}${currentPage + 1}`;

  const currentIndex = currentPage - 1;

  const start = Math.max(currentIndex - 2, 0) // ページネーションリンクの開始index
  const end = Math.min(currentIndex + 2, numPages - 1) // ページネーションリンクの終了index
  const start_index = Math.max(start, end - currentIndex >= 2 ? start : start - (2 - (end - currentIndex)))
  const end_index = Math.min(end, start >= 2 ? end : end + (2 - (currentIndex - start)))


  return (
    <div className={pagination}>
      <Link to={prevPage} rel="prev" className={`${paginationLink} ${isFirst ? paginationLinkDisabled : ''}`}>
        ← 前
      </Link>
        {Array.from({ length: end_index - start_index + 1 }, (_, index) => {
          const i = start_index + index;
          return (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/blog/${category}${category === "" ? "" : "/"}${i === 0 ? "" : i + 1}`}
              className={`${paginationLink} ${
                currentPage === i + 1 ? paginationLinkDisabled : ""
              }`}
            >
              {i + 1}
            </Link>
          );
        })}
      <Link to={nextPage} rel="next" className={`${paginationLink} ${isLast ? paginationLinkDisabled : ''}`}>
        次 →
      </Link>
    </div>
  );
};

export default Pagination;
