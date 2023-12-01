"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NoticeForm({ onClick }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(onClick);

  const reset = () => {
    onClick();
    setTitle("");
    setBody("");
    setError(false);
    setLoading(false);
  };

  const submitHandler = async () => {
    setLoading(true);
    const info = {
      title: title,
      body: body,
    };
    try {
      const res = await fetch("/api/", {
        method: "POST",
        body: JSON.stringify(info),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error);
      }

      // const json = await res.json(); // format when I need to get the json

      reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (body.length > 0 && title.length > 0) {
      return submitHandler();
    }
    setError(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-slate-200/[0.9] text-black">
      <label>
        <span>Title:</span>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Notice:</span>
        <textarea
          name="body"
          className="pb-24"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <button className="btn-primary" type="submit">
        {!loading ? `Submit` : `Submitting`}
      </button>
      {error ? <div className="error">Please fill out the bulletin.</div> : ""}
    </form>
  );
}
