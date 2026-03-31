"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getProductOne(id) {
  try {
    const supabase = createSupabaseClient();
    const productId = Number.parseInt(id, 10);

    const { data: product, error: productError } = await supabase
      .from("Product")
      .select("*")
      .eq("id", productId)
      .maybeSingle();

    if (productError) {
      throw new Error(`Urun getirme hatasi: ${productError.message}`);
    }

    if (!product) {
      return null;
    }

    const [categoryResult, markaResult, modelResult, bayiUserResult] =
      await Promise.all([
        product.categoryId
          ? supabase
              .from("Category")
              .select("*")
              .eq("id", product.categoryId)
              .maybeSingle()
          : Promise.resolve({ data: null, error: null }),
        product.markaId
          ? supabase
              .from("Marka")
              .select("*")
              .eq("id", product.markaId)
              .maybeSingle()
          : Promise.resolve({ data: null, error: null }),
        product.modelId
          ? supabase
              .from("Model")
              .select("*")
              .eq("id", product.modelId)
              .maybeSingle()
          : Promise.resolve({ data: null, error: null }),
        product.bayiUserId
          ? supabase
              .from("BayiUser")
              .select("*")
              .eq("id", product.bayiUserId)
              .maybeSingle()
          : Promise.resolve({ data: null, error: null }),
      ]);

    if (categoryResult.error) {
      throw new Error(
        `Kategori getirme hatasi: ${categoryResult.error.message}`,
      );
    }
    if (markaResult.error) {
      throw new Error(`Marka getirme hatasi: ${markaResult.error.message}`);
    }
    if (modelResult.error) {
      throw new Error(`Model getirme hatasi: ${modelResult.error.message}`);
    }
    if (bayiUserResult.error) {
      throw new Error(
        `Bayi kullanici getirme hatasi: ${bayiUserResult.error.message}`,
      );
    }

    const productsWithDetails = {
      ...product,
      Category: categoryResult.data,
      Marka: markaResult.data,
      Model: modelResult.data,
      BayiUser: bayiUserResult.data,
    };

    return productsWithDetails;
  } catch (error) {
    throw new Error(error?.message || "getProductOne hatasi");
  }
}
