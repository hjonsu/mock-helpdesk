import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request) {
  const notice = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  await supabase
    .from("notices")
    .insert({ ...notice, user_email: session.user.email });

  return new NextResponse();
}
