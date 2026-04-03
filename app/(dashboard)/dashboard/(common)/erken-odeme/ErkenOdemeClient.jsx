"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import setErkenOdeme from "@/app/actions/Finansal/setErkenOdeme";
import putErkenOdeme from "@/app/actions/Finansal/putErkenOdeme";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const quickAmounts = [250000, 500000, 750000];

const formatCurrency = (value) => currencyFormatter.format(value || 0);
const formatDate = (value) => {
  if (!value) return "Belirtilmedi";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Belirtilmedi";
  return date.toLocaleDateString("tr-TR");
};

const ErkenOdemeClient = ({ erkenOdeme }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  const numericAmount = useMemo(() => Number(amount || 0), [amount]);
  const isAmountValid = numericAmount > 0;
  const formattedAmount = useMemo(
    () => formatCurrency(numericAmount),
    [numericAmount],
  );
  const currentStatus = erkenOdeme?.status;
  const statusLabel =
    currentStatus === "basvuru"
      ? "Başvuruda"
      : currentStatus === "onay-bekliyor"
        ? "Sizin Onayınız Bekleniyor"
        : currentStatus === "onaylandi"
          ? "Onaylandı"
          : "Bilinmiyor";
  const statusColorClass =
    currentStatus === "onaylandi"
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : currentStatus === "onay-bekliyor"
        ? "text-amber-700 bg-amber-50 border-amber-200"
        : "text-sky-700 bg-sky-50 border-sky-200";

  const handleAmountChange = (event) => {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, "");
    setAmount(sanitizedValue);
  };

  const handleQuickAmountSelect = (value) => {
    setAmount(String(value));
  };

  const onSubmit = () => {
    if (!isAmountValid) return;
    Swal.fire({
      title: "Erken Ödeme Talebi Oluşturulsun mu?",
      text: `Talep ettiğiniz tutar: ${formattedAmount}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet, Talep Et",
      cancelButtonText: "Hayır, Vazgeç",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await setErkenOdeme({
            amount: numericAmount,
          });

          if (res === true) {
            await Swal.fire({
              title: "Başarılı!",
              text: "Erken ödeme talebiniz oluşturuldu.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setAmount("");
            router.refresh();
          } else {
            await Swal.fire({
              title: "Hata!",
              text: "Erken ödeme talebi oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          await Swal.fire({
            title: "Hata!",
            text:
              error?.message ||
              "Erken ödeme talebi oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.",
            icon: "error",
          });
        }
      }
    });
  };

  const onOnayla = () => {
    Swal.fire({
      title: "Erken Ödeme Talebinizi Onaylıyor musunuz?",
      text: `Net Toplam tutar: ${formatCurrency(erkenOdeme?.toplamOdeme)}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet, Onayla",
      cancelButtonText: "Hayır, Vazgeç",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await putErkenOdeme(erkenOdeme?.id);
          if (res === true) {
            await Swal.fire({
              title: "Başarılı!",
              text: "Erken ödeme talebiniz onaylandı.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            router.refresh();
          } else {
            await Swal.fire({
              title: "Hata!",
              text: "Erken ödeme talebi onaylanırken bir hata oluştu. Lütfen tekrar deneyin.",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          await Swal.fire({
            title: "Hata!",
            text:
              error?.message ||
              "Erken ödeme talebi onaylanırken bir hata oluştu. Lütfen tekrar deneyin.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex w-full flex-col gap-4 pt-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-950">
              Erken Odeme
            </h2>
            <p className="max-w-6xl text-sm text-slate-500">
              Mağazanız için erken ödeme talebi oluşturun ve onay sürecinden
              sonra ödemelerinizi hızlandırın. Talebiniz finans ekibimiz
              tarafından incelenecek ve onaylandığında belirtilen tutar
              hesabınıza aktarılacaktır.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_480px]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-slate-900">
                Talep Formu
              </h3>
              <p className="text-sm text-slate-500">
                Girmek istediğiniz erken ödeme tutarını yazın veya hazır
                seçeneklerden birini seçin.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tutar Girişi
              </span>
              <div className="flex h-12 items-center rounded-xl border border-slate-300 bg-white px-3 transition focus-within:border-sky-400">
                <span className="mr-3 text-sm font-semibold text-slate-500">
                  TL
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Ornek: 15000"
                  className="h-full w-full border-0 bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </label>

            <div className="flex flex-wrap gap-2">
              {quickAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleQuickAmountSelect(value)}
                  className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                    Number(amount) === value
                      ? "border-sky-300 bg-sky-50 text-sky-700"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {formatCurrency(value)}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Talep oluşturulduktan sonra finans ekibi tarafından incelenir.
              Onay süreci ve aktarım zamanı operasyon yoğunluğuna göre
              değişebilir.
            </div>

            <button
              type="button"
              onClick={onSubmit}
              className="h-11 rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
              disabled={!isAmountValid}
            >
              Erken Odeme Talep Et
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-1">
            {currentStatus ? (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">
                    Mevcut Erken Odeme Talebiniz
                  </h3>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusColorClass}`}
                  >
                    {statusLabel}
                  </span>
                </div>

                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Talep Edilen Tutar
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">
                    {formatCurrency(erkenOdeme?.erkenTutar)}
                  </p>
                </div>

                {(currentStatus === "onay-bekliyor" ||
                  currentStatus === "onaylandi") && (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Kesinti
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {formatCurrency(erkenOdeme?.kesinti)}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Net Tutar
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {formatCurrency(erkenOdeme?.toplamOdeme)}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-3 sm:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ödeme Tarihi
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {formatDate(erkenOdeme?.tarih)}
                      </p>
                    </div>
                  </div>
                )}

                {currentStatus === "onay-bekliyor" && (
                  <button
                    type="button"
                    onClick={onOnayla}
                    className="mt-4 h-10 w-fit rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Onayla
                  </button>
                )}

                {currentStatus === "onaylandi" && (
                  <p className="mt-2 text-sm text-slate-500">
                    Not: Erken ödeme talebiniz onaylanmıştır. Ödeme işleminin
                    tamamlanması için finans ekibimiz tarafından işlenmektedir.
                    Ödeme tarihine kadar hesabınızı kontrol etmeye devam edin.
                  </p>
                )}
              </>
            ) : (
              <h3 className="text-base font-semibold text-slate-900">
                Henüz bir erken ödeme talebiniz bulunmamaktadır.
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErkenOdemeClient;
