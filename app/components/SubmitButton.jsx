"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn-primary">
      {pending ? <span>Creating...</span> : <span>Create</span>}
    </button>
  );
}
