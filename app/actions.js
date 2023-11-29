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

  const { error } = await supabase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email });

  if (error) {
    throw new Error("Failed to create new ticket.");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}

export async function deleteTicket(id) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.from("tickets").delete().eq("id", id);

  if (error) {
    throw new Error("Failed to delete ticket.");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}

export async function deleteNotice(id) {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("bulletins")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed to delete bulletin.");
  }

  revalidatePath("/");
  redirect("/");
}

export async function updateProfile(formData) {
  const profileInfo = Object.fromEntries(formData);
  const supabase = createServerActionClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const items = {
    id: session.user.id,
  };

  for (let item in profileInfo) {
    if (profileInfo.hasOwnProperty(item)) {
      items[item] = profileInfo[item];
    }
  }

  const check = await supabase
    .from("profiles")
    .select()
    .eq("id", session.user.id)
    .single();

  if (check.data.error) {
    throw new Error("Could not get user information");
  }

  const { error } = await supabase
    .from("profiles")
    .upsert(items, { onConflict: "id" })
    .eq("id", session.user.id);

  if (error) {
    console.log(error);
    throw new Error("Failed to change user info.");
  }

  revalidatePath("/profile");
  redirect("/profile");
}

export async function addNotice(formData) {
  const noticeInfo = Object.fromEntries(formData);
  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase.from("notices").insert({
    ...noticeInfo,
    user_email: session.user.email,
    user_id: session.user.id,
  });

  if (error) {
    throw new Error("Failed to create new bulletin.");
  }

  revalidatePath("/");
  redirect("/");
}
