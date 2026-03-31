"use server";
import { createSupabaseClient } from "@/lib/db";
import bcrypt from "bcryptjs";

export default async function setRegister(data) {
  try {
    const { name, lastname, email, password } = data;

    const supabase = createSupabaseClient();

    const { data: existingUser, error: existingUserError } = await supabase
      .from("BayiUser")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existingUserError) {
      throw new Error(`Kullanici kontrol hatasi: ${existingUserError.message}`);
    }

    if (existingUser) {
      return { status: false, message: "Bu Email Adresi Zaten Kayıtlı!" };
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const { error: insertError } = await supabase.from("BayiUser").insert({
      name: name,
      lastname: lastname,
      email: email,
      password: encryptedPassword,
    });

    if (insertError) {
      throw new Error(`Kayit olusturma hatasi: ${insertError.message}`);
    }

    return { status: true, message: "Kayıt Başarılı!" };
  } catch (error) {
    throw new Error(error?.message || "setRegister hatasi");
  }
}
