"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    !error ? router.push("/login") : console.log(error);
  };
  return (
    <button className="btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
}
