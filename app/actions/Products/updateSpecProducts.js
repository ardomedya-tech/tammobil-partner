"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function updateSpecProducts(formData) {
  try {
    const supabase = createSupabaseClient();

    await Promise.all(
      formData.map(async (item) => {
        const { error } = await supabase
          .from("Product")
          .update({
            isActive: item.isActive,
          })
          .eq("id", Number.parseInt(item.id, 10));

        if (error) {
          throw new Error(`Urun durum guncelleme hatasi: ${error.message}`);
        }
      }),
    );

    return true;
  } catch (error) {
    throw new Error(error?.message || "updateSpecProducts hatasi");
  }
}
