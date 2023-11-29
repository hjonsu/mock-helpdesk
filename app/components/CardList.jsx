"use client";
import { useState } from "react";
import Pagination from "./Paginate";
import { paginate } from "../helpers/paginate";
import Link from "next/link";
import DeleteIcon from "../(dashboard)/DeleteIcon";

export default function CardList({ data, ticket, session }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);

  console.log(data, "data here");

  return (
    <>
      {paginatedPosts.map((item, i) => {
        if (ticket)
          return (
            <div key={item.id} className="card my-5">
              <Link href={`/tickets/${item.id}`}>
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
            <div className="flex items-center">
              <h3>{item.title}</h3>
              {session.user.email === item.email && <DeleteIcon id={item.id} />}
            </div>
            <p>{item.body}</p>
            <div className="flex items-center">
              <p className="text-xs">From: {item.email}</p>
            </div>
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
