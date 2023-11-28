"use client";
import { useTransition } from "react";
import { deleteNotice } from "@/app/actions";
import { MdDelete } from "react-icons/md";

export default function DeleteIcon({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="cursor-pointer text-red-900 ml-auto text-md"
      onClick={() => startTransition(() => deleteNotice(id))}
      disabled={isPending}
      aria-describedby="delete bulletin"
    >
      {isPending ? (
        <>Deleting... </>
      ) : (
        <>
          <MdDelete />
        </>
      )}
    </button>
  );
}
