"use server";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { createSupabaseClient } from "@/lib/db";

export default async function setErkenOdeme(formData) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.id) {
      throw new Error("Erken ödeme talebi için kullanıcı doğrulanamadı.");
    }

    const amount = Number(formData?.amount);
    if (!amount || amount <= 0) {
      throw new Error("Geçerli bir tutar girmelisiniz.");
    }

    const supabase = createSupabaseClient();

    const erkenOdemePayload = {
      erkenTutar: amount,
      gunSayisi: null,
      oran: null,
      kesinti: null,
      toplamOdeme: null,
      status: "basvuru",
      tarih: null,
      bayiUserId: currentUser.id,
    };

    const { error } = await supabase
      .from("ErkenOdeme")
      .upsert(erkenOdemePayload, { onConflict: "bayiUserId" });

    if (error) {
      throw new Error(error.message);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || String(error));
  }
}
