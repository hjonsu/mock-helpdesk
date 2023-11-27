import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function BulletinBoard() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("notices").select();

  error ? console.log(error) : null;

  return (
    <>
      <h2>Bulletin Board</h2>
      {data.map((notice, i) => {
        return (
          <div className="card" key={i}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
            <p className="text-xs">From: {notice.user_email}</p>
          </div>
        );
      })}
    </>
  );
}
