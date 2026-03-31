"use server";
import { createSupabaseClient } from "@/lib/db";
import slugify from "slugify";

const SUPABASE_BUCKET = "bayi-documents";

function normalizeFileName(name) {
  const CharacterMap = {
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
  return slugify(name, {
    lower: true,
    replacement: (char) => CharacterMap[char] || (char === " " ? "-" : char),
    remove: /[*+~.()'"!:@]/g,
  });
}

async function ensureBucketExists(supabase, bucketName) {
  const { data: buckets, error: listError } =
    await supabase.storage.listBuckets();

  if (listError) {
    throw new Error(`Bucket kontrol hatasi: ${listError.message}`);
  }

  const exists = buckets?.some((bucket) => bucket.name === bucketName);
  if (exists) {
    return;
  }

  const { error: createError } = await supabase.storage.createBucket(
    bucketName,
    {
      public: true,
    },
  );

  if (createError) {
    throw new Error(`Bucket olusturma hatasi: ${createError.message}`);
  }
}

async function uploadToSupabase({ supabase, userId, magazaName, file, label }) {
  if (!(file instanceof File) || file.size === 0) {
    return null;
  }
  const normalizedMagazaName = normalizeFileName(magazaName || "bilinmiyor");
  const path = `bayi/${userId}/${Date.now()}-${normalizedMagazaName}-${label}`;
  const fileBuffer = await file.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .upload(path, fileBuffer, {
      contentType: file.type || "application/octet-stream",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(`${label} yukleme hatasi: ${uploadError.message}`);
  }

  const { data: publicData } = supabase.storage
    .from(SUPABASE_BUCKET)
    .getPublicUrl(path);

  return publicData?.publicUrl || null;
}

export default async function setInfoRegister(data) {
  try {
    if (!data?.user?.id) {
      throw new Error("Kullanici bilgisi bulunamadi.");
    }

    const supabase = createSupabaseClient();

    await ensureBucketExists(supabase, SUPABASE_BUCKET);

    const uploads = await Promise.all([
      uploadToSupabase({
        supabase,
        userId: data.user.id,
        magazaName: data.magazaName,
        file: data["vergiLevhası"] || data.vergiLevhasi,
        label: "vergi-levhasi",
      }),
      uploadToSupabase({
        supabase,
        userId: data.user.id,
        magazaName: data.magazaName,
        file: data.imzaSirkuleri,
        label: "imza-sirkuleri",
      }),
      uploadToSupabase({
        supabase,
        userId: data.user.id,
        magazaName: data.magazaName,
        file: data.kimlikFotokopisi,
        label: "kimlik-fotokopisi",
      }),
      uploadToSupabase({
        supabase,
        userId: data.user.id,
        magazaName: data.magazaName,
        file: data.sozlesme,
        label: "sozlesme",
      }),
      uploadToSupabase({
        supabase,
        userId: data.user.id,
        magazaName: data.magazaName,
        file: data.ticaretSicilGazetesi,
        label: "ticaret-sicil-gazetesi",
      }),
    ]);

    const [vergiUrl, imzaUrl, kimlikUrl, sozlesmeUrl, ticaretSicilUrl] =
      uploads;

    const updateData = {
      tel: data.tel || null,
      identityNumber: data.identityNumber || null,
      sirketName: data.sirketName || null,
      vergiNo: data.vergiNo || null,
      vergiDairesi: data.vergiDairesi || null,
      iban: data.iban || null,
      ibanName: data.ibanName || null,
      magazaName: data.magazaName || null,
      sirketAdres: data.sirketAdres || null,
      firstTimeLogin: false,
      ...(vergiUrl ? { vergiUrl } : {}),
      ...(ticaretSicilUrl ? { ticaretSicilUrl } : {}),
      ...(sozlesmeUrl ? { sozlesmeUrl } : {}),
      ...(imzaUrl ? { imzaUrl } : {}),
      ...(kimlikUrl ? { kimlikUrl } : {}),
    };

    const { error: updateError } = await supabase
      .from("BayiUser")
      .update(updateData)
      .eq("id", data.user.id);

    if (updateError) {
      throw new Error(`BayiUser guncelleme hatasi: ${updateError.message}`);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "setInfoRegister hatasi");
  }
}
