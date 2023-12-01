import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request) {
  const notice = await request.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("bulletins")
    .insert({
      ...notice,
      email: session.user.email,
      owner_id: session.user.id,
    })
    .select()
    .single();

  if (!data) {
    throw new Error("Could not post to bulletin.");
  }

  return NextResponse.json({ data: data, error: error });
}
