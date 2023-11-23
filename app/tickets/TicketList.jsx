import Link from "next/link";
import React from "react";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // 0 will opt out of cache. Better functionality for a helpdesk.
    },
  });

  return res.json();
}

export default async function TicketList() {
  // psuedo delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 180)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <div className="text-center">No open tickets.</div>
      )}
    </>
  );
}

// /tickets/id/info
