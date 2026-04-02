"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getProducts(id) {
  try {
    const supabase = createSupabaseClient();
    const userId = Number.parseInt(id, 10);

    if (!Number.isFinite(userId)) {
      throw new Error("Gecersiz kullanici id.");
    }

    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*, Category(*), Marka(*), Model(*)")
      .eq("bayiUserId", userId)
      .order("id", { ascending: true });

    if (productsError) {
      throw new Error(`Urun listeleme hatasi: ${productsError.message}`);
    }

    return products || [];
  } catch (error) {
    throw new Error(error?.message || "getProducts hatasi");
  }
}
