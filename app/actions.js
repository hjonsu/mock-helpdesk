"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //   try {
  //     console.log(error);
  //   } catch (error) {
  //     throw new Error("Failed to create new ticket.");
  //   }
  const { error } = await supabase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email });

  if (error) {
    throw new Error("Failed to create new ticket.");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}
