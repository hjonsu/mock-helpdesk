import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav className="flex justify-between">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Current tickets.</small>
          </p>
        </div>
        <div>
          <button className="btn-primary">
            <Link
              href="/tickets/create"
              className="text-white hover:text-neutral-100"
            >
              Create Ticket
            </Link>
          </button>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
