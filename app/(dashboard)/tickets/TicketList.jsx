import CardList from "@/app/components/CardList";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("tickets")
    .select()
    .order("created_at", { ascending: false });

  error ? console.log(error.message) : null;

  return data;
}

export default async function TicketList() {
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
