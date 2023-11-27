"use client";
import { useState } from "react";
import Pagination from "./Paginate";
import { paginate } from "../helpers/paginate";

export default function CardList({ notices }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(notices, currentPage, pageSize);

  return (
    <>
      {paginatedPosts.map((notice, i) => {
        return (
          <div className="card" key={i}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
            <p className="text-xs">From: {notice.user_email}</p>
          </div>
        );
      })}
      <Pagination
        items={notices.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 5
        onPageChange={onPageChange}
      />
    </>
  );
}
