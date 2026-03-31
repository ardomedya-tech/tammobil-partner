"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getAllCategory() {
  try {
    const supabase = createSupabaseClient();

    const [
      { data: category, error: categoryError },
      { data: marka, error: markaError },
      { data: model, error: modelError },
    ] = await Promise.all([
      supabase
        .from("Category")
        .select("*, Marka(*)")
        .order("id", { ascending: true }),
      supabase
        .from("Marka")
        .select("*, Model(*)")
        .order("id", { ascending: true }),
      supabase
        .from("Model")
        .select("*, Marka(*)")
        .order("id", { ascending: true }),
    ]);

    if (categoryError) {
      throw new Error(`Kategori getirme hatasi: ${categoryError.message}`);
    }
    if (markaError) {
      throw new Error(`Marka getirme hatasi: ${markaError.message}`);
    }
    if (modelError) {
      throw new Error(`Model getirme hatasi: ${modelError.message}`);
    }

    return { category, marka, model };
  } catch (error) {
    throw new Error(error?.message || "getAllCategory hatasi");
  }
}
