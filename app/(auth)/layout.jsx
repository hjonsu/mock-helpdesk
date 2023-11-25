import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  data.session ? redirect("/") : null;

  return (
    <>
      <nav>
        <h1>Mock Helpdesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
