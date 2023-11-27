"use client";

import { addTicket } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [priority, setPriority] = useState("low");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const newTicket = {
  //     title,
  //     body,
  //     priority,
  //   };

  //   const res = await fetch("/api/tickets", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newTicket),
  //   });

  //   const json = await res.json();

  //   if (json.error) {
  //     console.log(error.message);
  //   }
  //   if (json.data) {
  //     router.refresh();
  //     router.push("/tickets");
  //   }
  // };

  return (
    <form action={addTicket} className="w-1/2">
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
        <span>Body:</span>
        <textarea
          required
          name="body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          name="priority"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  );
}
