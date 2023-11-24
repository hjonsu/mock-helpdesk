import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mock Helpdesk | Tickets",
  description: "Tickets page of a Helpdesk app created by Jonathan Su (hjonsu)",
};

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();
  console.log(data.session, "data");
  return (
    <>
      <Navbar prop={data.session.user} />
      {children}
    </>
  );
}
