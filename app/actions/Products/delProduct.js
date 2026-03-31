"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function delProduct(id) {
  try {
    const supabase = createSupabaseClient();
    const productId = Number.parseInt(id, 10);

    const { error } = await supabase
      .from("Product")
      .delete()
      .eq("id", productId);

    if (error) {
      throw new Error(`Urun silme hatasi: ${error.message}`);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "delProduct hatasi");
  }
}
