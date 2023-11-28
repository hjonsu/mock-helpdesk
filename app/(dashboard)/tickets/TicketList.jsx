import CardList from "@/app/components/CardList";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("tickets").select();

  error ? console.log(error.message) : null;

  return data;
}

export default async function TicketList() {
  // psuedo delay
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  const tickets = await getTickets();
  return (
    <>
      <CardList data={tickets} ticket={true} />
      {tickets.length === 0 && (
        <div className="text-center">No open tickets.</div>
      )}
    </>
  );
}

// /tickets/id/info
