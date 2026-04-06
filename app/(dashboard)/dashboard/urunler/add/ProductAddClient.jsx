"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import setProduct from "@/app/actions/Products/setProduct";
import Select from "react-select";

const conditionDescriptions = {
  Mükemmel:
    "Ekranda leke bulunmaz. 2-3 hafif çizik olabilir. Kasada yalnızca yakından bakıldığında fark edilebilecek 1-2 hafif iz olabilir. Bataryada herhangi bir sorun yoktur.",
  "Çok İyi":
    "Ekranda leke yoktur, en fazla 4-5 hafif çizik bulunabilir. Kasada 3-4 hafif çizik olabilir ancak derin çizik bulunmaz. Bataryada sorun yoktur.",
  İyi: "Ekranda en fazla 1-2 küçük leke ve 5'ten fazla hafif çizik veya en çok 2 derin çizik olabilir. Kasada küçük izler ve en fazla 2-3 derin çizik bulunabilir. Batarya 'Bilinmeyen Parça' uyarısı verebilir.",
  Outlet:
    "Ekran 'Bilinmeyen Parça' uyarısı verebilir, ayrıca 3'ten fazla leke ve 2'den fazla derin çizik olabilir ancak kırık ya da çatlak bulunmaz. Kasada 4 veya daha fazla derin çizik olabilir. Batarya da 'Bilinmeyen Parça' uyarısı verebilir.",
};

const shippingOptions = ["Aynı Gün", "Ertesi Gün", "3. Gün", "4. Gün"];

const ProductAddClient = ({ allcategory, allproducts, user }) => {
  const { marka, model } = allcategory;

  const [mymodel, setMyModel] = useState(null);
  const [showPriceDetail, setShowPriceDetail] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const selectedMarka = watch("marka");
  const selectedColor = watch("color");
  const selectedStorage = watch("storage");
  const watchPrice = watch("price");
  const watchAlisPrice = watch("alisprice");

  // Ücret sabitleri
  const KOMISYON_ORAN = 0.15; // %15
  const KARGO_UCRET = 200; // 200 ₺ sabit
  const STOPAJ_ORAN = 0.01; // %1
  const PLATFORM_GIDERI = 15; // 15 ₺ sabit

  const satisFiyati = Number(watchPrice) || 0;
  const alisFiyati = Number(watchAlisPrice) || 0;
  const komisyon = satisFiyati * KOMISYON_ORAN;
  const stopaj = satisFiyati * STOPAJ_ORAN;
  const toplamDetay = komisyon + KARGO_UCRET + stopaj + PLATFORM_GIDERI;
  const tahminiKazanc = satisFiyati - alisFiyati - toplamDetay;

  const selectedDurum = watch("condition");
  const selectedConditionDescription = selectedDurum
    ? conditionDescriptions[selectedDurum]
    : null;
  const modelvalue = model
    .filter((item) => item.markaId === parseInt(selectedMarka))
    .map((item) => ({
      label: item?.name,
      value: item?.id,
    }));
  const myColorStorageModel =
    model?.find((item) => item.id === mymodel?.value) || {};

  const fieldClassName =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60";
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 48,
      borderRadius: 12,
      borderColor: state.isFocused ? "#64748b" : "#e2e8f0",
      boxShadow: state.isFocused
        ? "0 0 0 4px rgba(148, 163, 184, 0.18)"
        : "none",
      paddingLeft: 6,
      paddingRight: 6,
      backgroundColor: "#ffffff",
      transition: "all 0.2s ease",
      ":hover": {
        borderColor: "#94a3b8",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#94a3b8",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.14)",
      border: "1px solid #e2e8f0",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#1e293b"
        : state.isFocused
          ? "#f8fafc"
          : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#0f172a",
      cursor: "pointer",
    }),
  };

  const getFieldClasses = (fieldName) =>
    `${fieldClassName} ${errors[fieldName] ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`;

  const BuyBoxFiyat = allproducts
    .filter(
      (item) =>
        item.markaId === parseInt(selectedMarka) &&
        item.modelId === mymodel?.value &&
        item.color === selectedColor &&
        item.storage === selectedStorage,
    )
    .sort(
      (a, b) =>
        (b.indirim ? b.inprice : b.price) - (a.indirim ? a.inprice : a.price),
    );

  const buyBoxProduct = BuyBoxFiyat[0] || null;
  const buyBoxPrice = buyBoxProduct
    ? Number(
        buyBoxProduct.indirim ? buyBoxProduct.inprice : buyBoxProduct.price,
      ).toLocaleString("tr-TR")
    : null;
  const buyBoxStoreName = buyBoxProduct?.BayiUser?.magazaName || "Tammobil";
  const buyBoxSummary = buyBoxProduct
    ? `BuyBox fiyatı: ${buyBoxPrice} ₺ | Satıcı mağaza: ${buyBoxStoreName}`
    : "Bu kombinasyon için mağazada henüz ürün yok.";

  const onSubmit = async (data) => {
    if (!mymodel?.value) {
      await Swal.fire({
        icon: "warning",
        title: "Model seçimi gerekli",
        text: "Ürünü kaydetmeden önce bir model seçin.",
      });
      return;
    }

    const formData = {
      ...data,
      userId: user?.id,
      modelId: mymodel.value,
      stock: 1,
    };

    const res = await setProduct(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Eklendi",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res.message),
      });
    }
  };

  return (
    <section className="w-full py-6 text-slate-900">
      <div className="mb-6 overflow-hidden rounded-[28px] border border-slate-200 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)] md:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Ürün Ekle</h1>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] md:p-8">
          <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Ürün Bilgileri
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="xl:col-span-1">
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Kategorisi*
              </label>
              <select
                name="category"
                id="category"
                className={getFieldClasses("category")}
                {...register("category", { required: true })}
                required
              >
                <option value={1}>Yenilenmiş Cep Telefonu</option>
              </select>
              {errors.category && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Kategori seçimi zorunludur.
                </p>
              )}
            </div>

            <div className="xl:col-span-1">
              <label
                htmlFor="marka"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Marka*
              </label>
              <select
                name="marka"
                id="marka"
                className={getFieldClasses("marka")}
                {...register("marka", { required: true })}
                required
              >
                <option value="">Marka seçin</option>
                {marka?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
              {errors.marka && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Marka seçimi zorunludur.
                </p>
              )}
            </div>

            <div className="md:col-span-2 xl:col-span-2">
              <label
                htmlFor="model"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Model*
              </label>
              <Select
                instanceId="model-select"
                inputId="model"
                value={mymodel}
                name="model"
                options={selectedMarka ? modelvalue : []}
                onChange={(value) => {
                  setMyModel(value || null);
                }}
                placeholder={selectedMarka ? "Model seçin" : "Önce marka seçin"}
                noOptionsMessage={() => "Model bulunamadı"}
                styles={selectStyles}
                isClearable
              />
              <p className="mt-2 text-xs text-slate-500">
                Marka seçimine göre model listesi otomatik güncellenir.
              </p>
            </div>

            <div>
              <label
                htmlFor="color"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Rengi*
              </label>
              <select
                name="color"
                id="color"
                className={getFieldClasses("color")}
                {...register("color", { required: true })}
                required
              >
                {myColorStorageModel?.color?.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.color && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Ürün rengi zorunludur.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="storage"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Kapasitesi*
              </label>
              <select
                name="storage"
                id="storage"
                className={getFieldClasses("storage")}
                {...register("storage", { required: true })}
                required
              >
                {myColorStorageModel?.storage?.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.storage && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Ürün kapasitesi zorunludur.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="condition"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Durumu*
              </label>
              <select
                name="condition"
                id="condition"
                className={getFieldClasses("condition")}
                {...register("condition", { required: true })}
                required
              >
                <option value="Mükemmel">Mükemmel</option>
                <option value="Çok İyi">Çok İyi</option>
                <option value="İyi">İyi</option>
                <option value="Outlet">Outlet</option>
              </select>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Durum Açıklaması
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedConditionDescription ||
                  "Seçtiğiniz ürün durumuna göre kalite açıklaması burada gösterilir."}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] md:p-8">
          <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Satış
            </h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
              {buyBoxSummary}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <label
                htmlFor="alisprice"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Alış Fiyatı*
              </label>
              <input
                placeholder="Örn. 24999"
                name="alisprice"
                id="alisprice"
                type="number"
                className={getFieldClasses("alisprice")}
                {...register("alisprice", { required: true })}
              />
              {errors.alisprice && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Alış fiyatı bilgisi zorunludur.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Satış Fiyatı*
              </label>
              <input
                placeholder="Örn. 24999"
                name="price"
                id="price"
                type="number"
                className={getFieldClasses("price")}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  Satış fiyatı bilgisi zorunludur.
                </p>
              )}
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Fiyat Detayı
              </p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  Tahmini Kazanç:
                  <span
                    className={`ml-2 font-bold ${tahminiKazanc >= 0 ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {satisFiyati > 0
                      ? `${tahminiKazanc.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
                      : "—"}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => setShowPriceDetail(true)}
                  className="ml-3 inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                    />
                  </svg>
                  Detay
                </button>
              </div>
            </div>

            {/* Fiyat Detay Modalı */}
            {showPriceDetail && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
                onClick={() => setShowPriceDetail(false)}
              >
                <div
                  className="relative w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.22)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Başlık */}
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-950">
                      Fiyat Detayı
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowPriceDetail(false)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Satış / Alış */}
                  <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Satış Fiyatı</span>
                      <span className="font-semibold text-slate-800">
                        {satisFiyati > 0
                          ? `${satisFiyati.toLocaleString("tr-TR")} ₺`
                          : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Alış Fiyatı</span>
                      <span className="font-semibold text-red-500">
                        {alisFiyati > 0
                          ? `– ${alisFiyati.toLocaleString("tr-TR")} ₺`
                          : "—"}
                      </span>
                    </div>
                  </div>

                  {/* Gider Kalemleri */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Kesintiler
                  </p>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        Komisyon Oranı (%{(KOMISYON_ORAN * 100).toFixed(0)})
                      </span>
                      <span className="font-medium text-red-500">
                        {satisFiyati > 0
                          ? `– ${komisyon.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
                          : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Kargo Ücreti</span>
                      <span className="font-medium text-red-500">
                        – {KARGO_UCRET.toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        Stopaj (%{(STOPAJ_ORAN * 100).toFixed(0)})
                      </span>
                      <span className="font-medium text-red-500">
                        {satisFiyati > 0
                          ? `– ${stopaj.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
                          : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Platform Gideri</span>
                      <span className="font-medium text-red-500">
                        – {PLATFORM_GIDERI.toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between text-sm">
                      <span className="font-semibold text-slate-700">
                        Toplam Kesinti
                      </span>
                      <span className="font-semibold text-red-500">
                        {satisFiyati > 0
                          ? `– ${toplamDetay.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
                          : "—"}
                      </span>
                    </div>
                  </div>

                  {/* Tahmini Kazanç */}
                  <div
                    className={`mt-4 rounded-xl border p-4 ${
                      tahminiKazanc >= 0
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm font-semibold ${
                          tahminiKazanc >= 0
                            ? "text-emerald-700"
                            : "text-red-700"
                        }`}
                      >
                        Tahmini Kazanç
                      </span>
                      <span
                        className={`text-lg font-bold ${
                          tahminiKazanc >= 0
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >
                        {satisFiyati > 0
                          ? `${tahminiKazanc.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
                          : "—"}
                      </span>
                    </div>
                    {satisFiyati > 0 && (
                      <p className="mt-1 text-xs text-slate-500">
                        {satisFiyati} − {alisFiyati} − {toplamDetay.toFixed(2)}{" "}
                        (kesintiler)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="stock"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün Stok Sayısı*
              </label>
              <input
                placeholder="1"
                name="stock"
                id="stock"
                type="number"
                className={`${fieldClassName} cursor-not-allowed bg-slate-100 text-slate-500`}
                defaultValue={1}
                readOnly
                {...register("stock")}
              />
              <p className="mt-2 text-xs text-slate-500">
                Yeni eklenen ürünler varsayılan olarak 1 adet stok ile açılır.
              </p>
            </div>

            <div>
              <label
                htmlFor="imei"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ürün IMEI*
              </label>
              <input
                placeholder="IMEI numarası"
                name="imei"
                id="imei"
                type="text"
                inputMode="numeric"
                maxLength={15}
                className={getFieldClasses("imei")}
                {...register("imei", {
                  required: true,
                  pattern: /^\d{15}$/,
                })}
                onInput={(event) => {
                  const value = event.currentTarget.value
                    .replace(/\D/g, "")
                    .slice(0, 15);
                  event.currentTarget.value = value;
                }}
              />
              {errors.imei && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.imei.type === "required"
                    ? "IMEI bilgisi zorunludur."
                    : "IMEI sadece rakamlardan oluşmalı ve 15 haneli olmalıdır."}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="kargoTime"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Kargo Süresi*
              </label>
              <select
                name="kargoTime"
                id="kargoTime"
                className={getFieldClasses("kargoTime")}
                {...register("kargoTime", { required: true })}
                required
              >
                {shippingOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">
              Kayda Hazır
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Zorunlu alanları doldurduğunuzda ürün sistemde aktif olarak
              oluşturulur.
            </p>
          </div>

          <button
            className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            type="submit"
          >
            Ürün Ekle
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductAddClient;
