"use client";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      if (error) {
        console.log(error);
        setLoading(false);
      }
    }

    router.refresh();
    router.push("/tickets");
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
