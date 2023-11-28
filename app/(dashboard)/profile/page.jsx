import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
    <main>
      <h2>Profile: {session.user.email}</h2>
      <h3>First Name:</h3>
      <p>{data.first_name}</p>
      <h3>Last Name:</h3>
      <p>{data.last_name}</p>
      <p>Account info is in here.</p>

      <button>Update Information</button>
    </main>
  );
}
