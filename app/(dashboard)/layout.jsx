import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Mock Helpdesk | Tickets",
  description: "Tickets page of a Helpdesk app created by Jonathan Su (hjonsu)",
};

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const user = await supabase
    .from("profiles")
    .select()
    .eq("id", data.session.user.id)
    .single();

  if (user.data.error) {
    throw new Error("Could not get user information");
  }

  !data.session ? redirect("/login") : null;
  console.log(data.session, "userklajfdlakjfldk");
  const userData = {
    ...user.data,
    email: data.session.user.email,
  };
  return (
    <>
      <Navbar user={userData} />
      {children}
    </>
  );
}
