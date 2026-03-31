"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getSettings() {
  try {
    const supabase = createSupabaseClient();

    const { data: ayarlar, error } = await supabase
      .from("Ayarlar")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error) {
      throw new Error(`Ayarlar getirme hatasi: ${error.message}`);
    }

    return ayarlar;
  } catch (error) {
    throw new Error(error?.message || "getSettings hatasi");
  }
}
