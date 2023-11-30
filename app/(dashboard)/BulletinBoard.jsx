import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CardList from "../components/CardList";
import Modal from "../components/Modal";

export default async function BulletinBoard() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // const supabase = createServerComponnpm entClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("bulletins")
    .select()
    .order("created_at", { ascending: false });

  error ? console.log(error) : null;

  return (
    <div className="flex flex-col basis-2/3">
      <div className="flex justify-between my-1">
        <h2>Bulletin Board</h2>
        <Modal />
      </div>

      <CardList data={data} session={session} />
    </div>
  );
}
