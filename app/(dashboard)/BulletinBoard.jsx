import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CardList from "../components/CardList";

export default async function BulletinBoard() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("notices").select();

  error ? console.log(error) : null;

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const pageSize = 10;

  //   const onPageChange = (page) => {
  //     setCurrentPage(page);
  //   };

  return (
    <>
      <h2>Bulletin Board</h2>
      <CardList notices={data} />
    </>
  );
}
