import React from "react";
import Link from "next/link";
import Logout from "./Logout";
const NavDesktop = ({ user }) => {
  return (
    <ul className="hidden desktop w-full md:flex md:items-center md:justify-between gap-5 text-sm">
      <h1>Mock Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/profile" className="mr-auto">
        Profile
      </Link>
      {user.user.username && <span>Welcome {user.user.username}</span>}
      {!user.user.username && user.user.full_name && (
        <span>Welcome {user.user.full_name}</span>
      )}
      {!user.user.usename && !user.user.full_name && (
        <span>Welcome {user.user.email}</span>
      )}
      {user && <Logout />}
    </ul>
  );
};

export default NavDesktop;
