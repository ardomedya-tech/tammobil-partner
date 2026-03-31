"use server";
import { getServerSession } from "next-auth";
import { createSupabaseClient } from "@/lib/db";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const supabase = createSupabaseClient();
    const { data: currentUser, error } = await supabase
      .from("BayiUser")
      .select("*")
      .eq("email", session?.user?.email)
      .maybeSingle();

    if (error) {
      return null;
    }
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
}
