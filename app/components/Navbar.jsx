import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/help-icon.png";
import Logout from "./Logout";

export default function Navbar(user) {
  console.log(user, "inside the navbar");
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
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user.user.first_name && (
        <span>
          Welcome {user.user.first_name} {user.user.last_name}
        </span>
      )}
      {!user.user.first_name && <span>Welcome {user.user.email}</span>}
      {user && <Logout />}
    </nav>
  );
}
