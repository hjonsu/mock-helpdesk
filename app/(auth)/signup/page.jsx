"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; //Connects to Supabase. Function meant for use in client, not server component.
// Supabase uses Cookies in next js to login/signup users
import React from "react";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
    }

    console.log("signup", email, password, error);
  };
  return (
    <main>
      <h2 className="text-center">Sign Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

// /auth/signup
// wrapping auth folder in () will remove it from route
