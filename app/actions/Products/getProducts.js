"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getProducts(id) {
  try {
    const supabase = createSupabaseClient();
    const userId = Number.parseInt(id, 10);

    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*")
      .eq("bayiUserId", userId)
      .order("id", { ascending: true });

    if (productsError) {
      throw new Error(`Urun listeleme hatasi: ${productsError.message}`);
    }

    const categoryIds = [
      ...new Set((products || []).map((x) => x.categoryId).filter(Boolean)),
    ];
    const markaIds = [
      ...new Set((products || []).map((x) => x.markaId).filter(Boolean)),
    ];
    const modelIds = [
      ...new Set((products || []).map((x) => x.modelId).filter(Boolean)),
    ];

    const [categoryResult, markaResult, modelResult] = await Promise.all([
      categoryIds.length
        ? supabase.from("Category").select("*").in("id", categoryIds)
        : Promise.resolve({ data: [], error: null }),
      markaIds.length
        ? supabase.from("Marka").select("*").in("id", markaIds)
        : Promise.resolve({ data: [], error: null }),
      modelIds.length
        ? supabase.from("Model").select("*").in("id", modelIds)
        : Promise.resolve({ data: [], error: null }),
    ]);

    if (categoryResult.error) {
      throw new Error(
        `Kategori listeleme hatasi: ${categoryResult.error.message}`,
      );
    }
    if (markaResult.error) {
      throw new Error(`Marka listeleme hatasi: ${markaResult.error.message}`);
    }
    if (modelResult.error) {
      throw new Error(`Model listeleme hatasi: ${modelResult.error.message}`);
    }

    const categoryMap = Object.fromEntries(
      (categoryResult.data || []).map((item) => [item.id, item]),
    );
    const markaMap = Object.fromEntries(
      (markaResult.data || []).map((item) => [item.id, item]),
    );
    const modelMap = Object.fromEntries(
      (modelResult.data || []).map((item) => [item.id, item]),
    );

    const productsWithDetails = (products || []).map((item) => ({
      ...item,
      Category: categoryMap[item.categoryId] || null,
      Marka: markaMap[item.markaId] || null,
      Model: modelMap[item.modelId] || null,
    }));

    return productsWithDetails;
  } catch (error) {
    throw new Error(error?.message || "getProducts hatasi");
  }
}
