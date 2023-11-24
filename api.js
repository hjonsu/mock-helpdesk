// api.js
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function api() {
  const { data, error } = await supabase
    .from("countries")
    .insert({ id: 1, name: "Denmark" })
    .select();

  console.log(data, error, "dataerror");
}
