"use server";
import { createSupabaseClient } from "@/lib/db";

export default async function getOrders(id) {
  try {
    const supabase = createSupabaseClient();

    const { data: siparis, error } = await supabase
      .from("Orders")
      .select("*, Product(*), BayiProduct(*), BayiUser(id,name,magazaName)")
      .eq("bayiUserId", id);

    if (error) {
      throw new Error(`Siparis listeleme hatasi: ${error.message}`);
    }

    return siparis;
  } catch (error) {
    throw new Error(error?.message || "getOrders hatasi");
  }
}
