"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addTicket(formData) {
  const ticket = object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email });

  revalidatePath("/");
  redirect("/ticekts");
}
