"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getOdemeler(id) {
  try {
    const supabase = createSupabaseClient();
    const { data: odemeler, error } = await supabase
      .from("Odemeler")
      .select("*")
      .eq("bayiUserId", id)
      .order("createdAt", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return odemeler;
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
