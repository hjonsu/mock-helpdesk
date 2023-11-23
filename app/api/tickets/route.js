// /api/tickets Can not put route.js where there is a page.jsx.
// no need to get data from DB here when we can get it from server component (e.g. /(dashboard)/tickets/create/page.jsx)
// Will need for special cases of client components
// Example here is redundant in this case.

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

// POST example (in this case could go in the server component/redundant)

export async function POST(request) {
  const ticket = await request.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, {
    status: 201,
  });
}
