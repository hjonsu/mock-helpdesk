"use client";

import React from "react";
import AuthForm from "../AuthForm";

export default function SignUp() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("signup", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Sign Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}

// /auth/signup
// wrapping auth folder in () will remove it from route
