"use server";

import { createSupabaseClient } from "@/lib/db";

export default async function getErkenOdeme(id) {
  try {
    const supabase = createSupabaseClient();
    const { data: erkenOdeme, error } = await supabase
      .from("ErkenOdeme")
      .select("*")
      .eq("bayiUserId", id)
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return erkenOdeme;
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
