import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>
        Cannot find the ticket. Back to all <Link href="/tickets">tickets</Link>
        .
      </p>
    </main>
  );
}
