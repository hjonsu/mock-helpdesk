"use client";
import { useState } from "react";
import Pagination from "./Paginate";
import { paginate } from "../helpers/paginate";

export default function CardList({ data, tickets }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <>
      {paginatedPosts.map((item, i) => {
        if (tickets)
          return (
            <div key={item.id} className="card my-5">
              <Link href={`/tickets/${ticket.id}`}>
                <h3>{item.title}</h3>
                <p>{item.body.slice(0, 180)}...</p>
                <div className={`pill ${item.priority}`}>
                  {item.priority} priority
                </div>
              </Link>
            </div>
          );
        return (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p className="text-xs">From: {item.user_email}</p>
          </div>
        );
      })}
      <Pagination
        items={data.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 5
        onPageChange={onPageChange}
      />
    </>
  );
}
