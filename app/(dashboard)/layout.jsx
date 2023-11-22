import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mock Helpdesk | Tickets",
  description: "Tickets page of a Helpdesk app created by Jonathan Su (hjonsu)",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
