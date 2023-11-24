import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
  const id = params.id;

  const supabase = createRouteHandlerClient({ cookies });

  console.log(id, "id herelkjflkdajl;");
  const { error } = await supabase.from("tickets").delete().eq("id", id);
  console.log({ error });
  return NextResponse.json({ error });
}
