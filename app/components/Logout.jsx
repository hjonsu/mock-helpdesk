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
    <button
      className="p-5 text-lg md:text-md md:bg-red-600 md:p-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
