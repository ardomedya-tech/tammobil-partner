"use client";

import putOrder from "@/app/actions/Order/putOrder";
import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
const cardClassName =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]";

const LabelValue = ({ label, value, className = "" }) => (
  <div className={className}>
    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
      {label}
    </span>
    <div className="text-sm text-slate-700">{value || "-"}</div>
  </div>
);

const OrderClient = ({ order }) => {
  const [invoiceFile, setInvoiceFile] = useState(null);
  const [uploadedInvoiceUrl, setUploadedInvoiceUrl] = useState(
    order?.faturaUrl || "",
  );

  const [status, setStatus] = useState(order?.status);
  const [isSaving, setIsSaving] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setInvoiceFile(acceptedFiles?.[0] || null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
    },
  });

  const filePreview = useMemo(() => {
    if (!invoiceFile) {
      return "Henüz dosya seçilmedi.";
    }
    const kb = Math.max(1, Math.round(invoiceFile.size / 1024));
    return `${invoiceFile.name} (${kb} KB)`;
  }, [invoiceFile]);

  const handleSaveInvoice = async () => {
    try {
      setIsSaving(true);

      const formData = new FormData();
      formData.append("file", invoiceFile);

      const res = await putOrder(formData, status, order.id);

      if (res.status !== true) {
        throw new Error(res?.error || "Fatura kaydedilemedi.");
      }

      setUploadedInvoiceUrl(res.invoiceUrl);
      setInvoiceFile(null);
      await Swal.fire({
        icon: "success",
        title: "Başarılı",
        text: "Başarıyla kaydedildi.",
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: error?.message || "Bir hata oluştu.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (!order) {
    return (
      <div className="p-8 text-center text-slate-500">Sipariş bulunamadı.</div>
    );
  }

  const statusOptions = [
    { value: "yeni-siparis", label: "Yeni Sipariş" },
    { value: "kargo", label: "Kargolandı" },
    { value: "teslim-edildi", label: "Teslim Edilen" },
    { value: "iade", label: "İade Edildi" },
    { value: "iptal", label: "İptal Edildi" },
  ];

  const product = order.Product || order.BayiProduct;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div className="rounded-3xl border border-slate-200 bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
          Sipariş Detayı
        </p>
        <h1 className="mt-2 text-2xl font-semibold">#{order.id}</h1>
      </div>

      <div className={cardClassName}>
        <h2 className="mb-4 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
          Alıcı Bilgileri
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabelValue
            label="Ad Soyad"
            value={`${order.name || ""} ${order.lastname || ""}`.trim() || "-"}
          />
          <LabelValue label="T.C. Kimlik No" value={order.identityNumber} />
          <LabelValue label="Telefon" value={order.tel} />
          <LabelValue
            label="Şehir / İlçe"
            value={`${order.city || "-"}${order.district ? ` / ${order.district}` : ""}`}
          />
          <LabelValue
            label="Adres"
            value={order.adres}
            className="sm:col-span-2"
          />

          <LabelValue
            label="Sipariş Durumu"
            value={
              statusOptions.find((option) => option.value === order.status)
                ?.label || "-"
            }
            className="sm:col-span-2"
          />
        </div>
      </div>

      <div className={cardClassName}>
        <h2 className="mb-4 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
          Ürün Bilgileri
        </h2>
        {product ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <LabelValue label="Ürün Adı" value={product?.name} />
            <LabelValue label="Durum" value={product?.condition} />
            <LabelValue
              label="Fiyat"
              value={
                order.price != null
                  ? `${Number(order.price).toLocaleString("tr-TR")} ₺`
                  : "-"
              }
            />
            <LabelValue label="IMEI" value={product?.imei} />
          </div>
        ) : (
          <p className="text-sm text-slate-500">Ürün bilgisi bulunamadı.</p>
        )}
      </div>

      <div>
        <label
          htmlFor="siparis_status"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Siparis Durumu
        </label>
        <select
          name="status"
          id="siparis_status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11.5 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 transition focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-200/70"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={cardClassName}>
        <h2 className="mb-4 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
          Fatura
        </h2>

        <div
          {...getRootProps()}
          className={`flex min-h-36 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed px-4 py-6 text-center transition ${
            isDragActive
              ? "border-sky-500 bg-sky-50 text-sky-700"
              : "border-slate-300 bg-slate-50 text-slate-600 hover:border-sky-400"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-sm font-medium">
            {isDragActive
              ? "Dosyayı buraya bırakın"
              : "Fatura dosyasını buraya sürükleyin veya seçmek için tıklayın"}
          </p>
        </div>

        <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
          {filePreview}
        </div>

        {uploadedInvoiceUrl ? (
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2">
            <a
              href={uploadedInvoiceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              Mevcut faturayı aç
            </a>
          </div>
        ) : null}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={handleSaveInvoice}
            disabled={isSaving}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderClient;
