import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/help-icon.png";
import Logout from "./Logout";

export default function Navbar(user) {
  console.log(user, user.user, "user");
  return (
    <nav>
      <Image
        src={Logo}
        alt="Mock helpdesk logo"
        width={40}
        quality={100}
        placeholder="blur"
      />
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
    </nav>
  );
}
