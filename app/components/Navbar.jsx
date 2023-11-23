import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/help-icon.png";

export default function Navbar() {
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
    </nav>
  );
}
