"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function putBayiOrder(bayiProductId, bayiUserId) {
  try {
    const supabase = createSupabaseClient();

    const { data: productData, error: productError } = await supabase
      .from("BayiProduct")
      .update({ status: "alindi", sells: 1, bayiUserId: bayiUserId })
      .eq("id", bayiProductId)
      .select()
      .single();

    if (productError) {
      throw new Error(productError.message);
    }
    const { error: orderError } = await supabase.from("Orders").insert({
      name: productData?.musteriName,
      lastname: productData?.musteriLastname,
      identityNumber: productData?.musteriTC,
      tel: productData?.musteriTel,
      adres: productData?.musteriAdres,
      city: productData?.musteriCity,
      district: productData?.musteriDistrict,
      kargoID: productData?.kargoID,
      price: productData?.price,
      bayiUserId,
      bayiProductId: bayiProductId,
    });

    if (orderError) {
      throw new Error(orderError.message);
    }
    return true;
  } catch (error) {
    throw new Error(error?.message || "putBayiOrder hatasi");
  }
}
