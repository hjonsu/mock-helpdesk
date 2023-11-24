"use client";
import { redirect } from "next/dist/server/api-utils";
import { Router } from "next/";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    setLoading(true);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(error.message);
      setLoading(false);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <button className="btn-primary" onClick={handleClick} disabled={loading}>
      {loading ? (
        <>
          <TiDelete />
          Deleting...
        </>
      ) : (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
}
