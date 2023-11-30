"use client";
import { useState } from "react";
import Pagination from "./Paginate";
import { paginate } from "../helpers/paginate";
import Link from "next/link";
import DeleteIcon from "../(dashboard)/DeleteIcon";
import truncate from "../helpers/truncate";

export default function CardList({ data, ticket, session }) {
  const [currentPage, setCurrentPage] = useState(1);
  let pageSize = 5;

  if (ticket) {
    pageSize = 4;
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <>
      <div className="overflow-hidden">
        <div
          className={`${
            paginatedPosts.length < pageSize
              ? `cropped-height-unfill overflow-y-scroll`
              : "cropped-height overflow-y-scroll"
          }`}
        >
          {paginatedPosts.map((item, i) => {
            if (ticket)
              return (
                <div key={item.id} className="card my-5 p-10">
                  <Link href={`/tickets/${item.id}`}>
                    <h3>{item.title}</h3>
                    <p>{truncate(item.body, 150)}</p>
                    <div className={`pill ${item.priority}`}>
                      {item.priority} priority
                    </div>
                  </Link>
                </div>
              );
            return (
              <div className="card first:mt-0 last:mb:0" key={i}>
                <div className="flex items-center">
                  <h3>{item.title}</h3>
                  {session.user.email === item.email && (
                    <DeleteIcon id={item.id} />
                  )}
                </div>
                <p>{item.body}</p>
                <div className="flex items-center">
                  <p className="text-xs">From: {item.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        items={data.length} // data.length
        currentPage={currentPage} // 1
        pageSize={pageSize} // 5
        onPageChange={onPageChange}
      />
    </>
  );
}
