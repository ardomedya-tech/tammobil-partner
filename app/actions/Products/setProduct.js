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

export default async function setProduct(data) {
  try {
    const supabase = createSupabaseClient();
    const markaId = Number.parseInt(data.marka, 10);
    const modelId = Number.parseInt(data.modelId, 10);
    const categoryId = Number.parseInt(data.category, 10);
    const userId = Number.parseInt(data.userId, 10);

    const [
      { data: myMarka, error: markaError },
      { data: myModel, error: modelError },
    ] = await Promise.all([
      supabase
        .from("Marka")
        .select("id,name,slug")
        .eq("id", markaId)
        .maybeSingle(),
      supabase
        .from("Model")
        .select("id,name,slug")
        .eq("id", modelId)
        .maybeSingle(),
    ]);

    if (markaError) {
      throw new Error(`Marka bulma hatasi: ${markaError.message}`);
    }
    if (modelError) {
      throw new Error(`Model bulma hatasi: ${modelError.message}`);
    }

    if (!myMarka || !myModel) {
      throw new Error("Marka veya model bulunamadi.");
    }

    const urunName = `${myMarka.name} ${myModel.name} ${data.storage} ${data.color}`;
    const baseSlug = toSlug(urunName);

    const urunDescription = `${myMarka.name} ${myModel.name} ${data.storage} ${data.color} özelliklerine sahip Tammobil güvencesiyle yenilenmiş ürünümüzü hemen satın alın`;

    const bucketName = "products-image";
    const markaSlug = toSlug(myMarka.slug || myMarka.name);
    const modelSlug = toSlug(myModel.slug || myModel.name);
    const colorSlug = toSlug(data.color);
    const folderPath = `telefon/${markaSlug}/${modelSlug}/${colorSlug}`;

    const { data: storageFiles, error: listError } = await supabase.storage
      .from(bucketName)
      .list(folderPath, {
        limit: 1000,
        sortBy: { column: "name", order: "asc" },
      });

    if (listError) {
      throw new Error(`Supabase list error: ${listError.message}`);
    }

    const imageData = (storageFiles || [])
      .filter((file) => Boolean(file?.name))
      .map(
        (file) =>
          supabase.storage
            .from(bucketName)
            .getPublicUrl(`${folderPath}/${file.name}`).data.publicUrl,
      )
      .filter(Boolean);

    const initialSlug = `${baseSlug}-${Date.now()}`;

    const { data: createdProduct, error: createError } = await supabase
      .from("Product")
      .insert({
        name: urunName,
        slug: initialSlug,
        desc: urunDescription,
        price: parseFloat(data.price) || 0,
        inprice: 0,
        color: data.color,
        storage: data.storage,
        condition: data.condition,
        stock: parseInt(data.stock),
        images: imageData,
        kargoTime: data.kargoTime,
        imei: data.imei,
        categoryId,
        markaId,
        modelId,
        bayiUserId: userId,
      })
      .select("id")
      .single();

    if (createError) {
      throw new Error(`Urun olusturma hatasi: ${createError.message}`);
    }

    const { error: updateError } = await supabase
      .from("Product")
      .update({
        slug: `${baseSlug}-${createdProduct.id}`,
      })
      .eq("id", createdProduct.id);

    if (updateError) {
      throw new Error(`Slug guncelleme hatasi: ${updateError.message}`);
    }

    return true;
  } catch (error) {
    throw new Error(error?.message || "setProduct hatasi");
  }
}
