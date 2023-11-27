"use client";
import { TiDelete } from "react-icons/ti";
import { useTransition } from "react";
import { deleteTicket } from "@/app/actions";

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="btn-primary"
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending ? (
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
