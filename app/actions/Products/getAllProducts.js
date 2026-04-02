"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getAllProducts() {
  try {
    const supabase = createSupabaseClient();

    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*, Category(*), Marka(*), Model(*), BayiUser(id, magazaName))");

    if (productsError) {
      throw new Error(`Urun listeleme hatasi: ${productsError.message}`);
    }

    return products || [];
  } catch (error) {
    throw new Error(error?.message || "getAllProducts hatasi");
  }
}
