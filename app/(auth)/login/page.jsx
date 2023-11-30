"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setSubmitting(false);
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="text-white">
      <h2 className="text-center text-3xl text-white">Login</h2>
      <AuthForm handleSubmit={handleSubmit} submitting={submitting} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

// /auth/login
