import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", session.user.id)
    .single();

  if (error) {
    throw new Error("Failed get user information.");
  }

  return (
    <main className="text-center flex flex-col justify-center items-center gap-4">
      <div className="card">
        <div className="flex flex-col gap-4 w-80">
          <div className="flex flex-row w-full justify-center">
            <h2>Profile: </h2>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <h3>First Name: </h3>
            <p className="mx-4">{data.first_name}</p>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <h3>Last Name: </h3>
            <p className="mx-4">{data.last_name}</p>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <h3>Email: </h3>
            <p className="mx-4">{session.user.email}</p>
          </div>
          <Link href="/profile/update" className="btn-primary p-3">
            Edit Info
          </Link>
        </div>
      </div>
    </main>
  );
}
