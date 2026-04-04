"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function putKomisyonStatus(data) {
  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase
      .from("Product")
      .update({
        bayiKomisyonStatus: "onaylandi",
      })
      .eq("id", Number.parseInt(data.id, 10));

    if (error) {
      throw new Error(`Urun guncelleme hatasi: ${error.message}`);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "putKomisyonStatus hatasi");
  }
}
