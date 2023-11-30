import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function ProfileInfo() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // const supabase = createServerComponentClient({ cookies });

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
    <>
      <div className="flex flex-row w-full items-center justify-between">
        <h3>Username: </h3>
        <p className="mx-4">{data.username}</p>
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <h3>Full Name: </h3>
        <p className="mx-4">{data.full_name}</p>
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <h3>Personal Site</h3>
        <p className="mx-4">{data.website}</p>
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <h3>Email: </h3>
        <p className="mx-4">{session.user.email}</p>
      </div>
      <Link href="/profile/update" className="btn-primary p-3">
        Edit Info
      </Link>
    </>
  );
}
