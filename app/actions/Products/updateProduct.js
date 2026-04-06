"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function updateProduct(data) {
  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase
      .from("Product")
      .update({
        color: data.color,
        storage: data.storage,
        condition: data.condition,
        price: parseFloat(data.price) || 0,
        alisprice: parseFloat(data.alisprice) || 0,
        inprice: parseFloat(data.inprice) || 0,
        indirimsize: data.indirimsize,
        indirim: data.indirim === "true",
        stock: Number.parseInt(data.stock, 10),
        markaId: Number.parseInt(data.marka, 10),
        categoryId: Number.parseInt(data.category, 10),
        modelId: Number.parseInt(data.modelId, 10),
      })
      .eq("id", Number.parseInt(data.id, 10));

    if (error) {
      throw new Error(`Urun guncelleme hatasi: ${error.message}`);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "updateProduct hatasi");
  }
}
