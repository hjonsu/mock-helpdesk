"use client";

import { useState } from "react";

export default function NoticeForm({ close }) {
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
  };

  return (
    <form className="w-1/2">
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
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <button className="btn-primary" onClick={submitHandler}>
        {!loading ? `Submit` : `Submitting`}
      </button>
    </form>
  );
}
