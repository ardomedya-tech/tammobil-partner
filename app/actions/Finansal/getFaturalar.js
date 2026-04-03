"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getFaturalar(id) {
  try {
    const supabase = createSupabaseClient();
    const { data: faturalar, error } = await supabase
      .from("Faturalar")
      .select("*, BayiUser (id, magazaName)")
      .eq("bayiUserId", id)
      .order("tarih", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return faturalar;
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
