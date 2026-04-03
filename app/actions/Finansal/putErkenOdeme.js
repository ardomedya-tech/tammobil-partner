"use server";

import { createSupabaseClient } from "@/lib/db";

export default async function setErkenOdeme(id) {
  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase
      .from("ErkenOdeme")
      .update({ status: "onaylandi" })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
