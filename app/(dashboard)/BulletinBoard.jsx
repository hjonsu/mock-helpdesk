import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CardList from "../components/CardList";
import { FaNotesMedical } from "react-icons/fa6";
import Modal from "../components/Modal";

export default async function BulletinBoard() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("notices").select();

  error ? console.log(error) : null;

  return (
    <>
      <div className="flex justify-between">
        <h2>Bulletin Board</h2>
        <Modal />
      </div>
      <CardList data={data} />
    </>
  );
}
