"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function putOrderStatus(id, status) {
  try {
    const supabase = createSupabaseClient();

    const updatePayload = { status };
    const { error: updateError } = await supabase
      .from("Orders")
      .update(updatePayload)
      .eq("id", id);

    if (updateError) {
      throw new Error(updateError.message || "Sipariş güncellenemedi.");
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "putOrder hatasi");
  }
}
