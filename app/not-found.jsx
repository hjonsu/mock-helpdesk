import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>
        Cannot find the page. Back to <Link href="/">Dashboard</Link>.
      </p>
    </main>
  );
}
