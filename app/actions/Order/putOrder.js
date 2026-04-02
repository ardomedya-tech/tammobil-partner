"use server";
import { createSupabaseClient } from "@/lib/db";
import slugify from "slugify";

const characterMap = {
  Ç: "C",
  Ş: "S",
  Ğ: "G",
  İ: "I",
  Ö: "O",
  Ü: "U",
  ç: "c",
  ş: "s",
  ğ: "g",
  ı: "i",
  ö: "o",
  ü: "u",
};

const toSlug = (value) =>
  slugify(value ?? "", {
    lower: true,
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    locale: "tr",
    trim: true,
    strict: true,
  }).replace(/[ÇŞĞİÖÜçşğıöü]/g, (char) => characterMap[char] || char);

export default async function putOrder(formData, status, orderId) {
  try {
    const supabase = createSupabaseClient();

    const { data: order, error: orderError } = await supabase
      .from("Orders")
      .select("* , BayiUser(*)")
      .eq("id", orderId)
      .single();

    if (orderError) {
      throw new Error(orderError.message || "Sipariş bulunamadı.");
    }

    const file = formData.get("file");
    const updatePayload = { status };

    if (file && file instanceof File && file.size > 0) {
      const { data, error: uploadError } = await supabase.storage
        .from("invoices")
        .upload(
          `${orderId}/${toSlug(order?.BayiUser?.magazaName)}-fatura-${Date.now()}`,
          file,
          {
            cacheControl: "3600",
            upsert: true,
          },
        );

      if (uploadError) {
        throw new Error(uploadError.message || "Fatura yüklenemedi.");
      }

      const { data: invoiceData } = supabase.storage
        .from("invoices")
        .getPublicUrl(data.path);

      updatePayload.faturaUrl = invoiceData.publicUrl;
    }

    const { error: updateError } = await supabase
      .from("Orders")
      .update(updatePayload)
      .eq("id", orderId);

    if (updateError) {
      throw new Error(updateError.message || "Sipariş güncellenemedi.");
    }

    return { status: true, invoiceUrl: updatePayload.faturaUrl ?? null };
  } catch (error) {
    throw new Error(error?.message || "putOrder hatasi");
  }
}
