import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const id = params.id;

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  console.log(data);
  error ? console.log(error.message) : null;

  return {
    title: `Mock Helpdesk | ${data?.title || "Ticket Undefined"}`,
    description: `${
      data?.body || "Ticket Undefined"
    }. App created by Jonathan Su (hjonsu)`,
  };
}

async function getTicket(id) {
  // psuedo delay
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  error ? console.log(error.message) : null;

  !data ? notFound() : null;

  return data;
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
