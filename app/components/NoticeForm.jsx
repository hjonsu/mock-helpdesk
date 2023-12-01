"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NoticeForm({ close }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);

    const info = {
      title: title,
      body: body,
    };

    const res = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(info),
    });

    const json = res.json();

    if (!json.error) {
      router.push("/");
    }

    if (json.error) {
      setLoading(false);
      throw new Error("Failed to submit post.");
    }
  };

  return (
    <form className="w-full bg-slate-200/[0.9] text-black">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Notice:</span>
        <textarea
          required
          name="body"
          className="pb-24"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <button className="btn-primary" type="submit" onClick={submitHandler}>
        {!loading ? `Submit` : `Submitting`}
      </button>
    </form>
  );
}
