"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getBayiProducts() {
  try {
    const supabase = createSupabaseClient();
    const { data: productsWithDetails, error } = await supabase
      .from("BayiProduct")
      .select(
        `
          *,
          Category (*),
          Marka (*),
          Model (*),
          BayiUser (id, magazaName, score)
        `,
      )
      .order("id", { ascending: true });

    return productsWithDetails || [];
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
