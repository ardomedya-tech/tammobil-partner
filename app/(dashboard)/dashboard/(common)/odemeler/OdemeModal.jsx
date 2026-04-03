const formatCurrency = (value) =>
  `${Number(value || 0).toLocaleString("tr-TR")} TL`;

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const statusMap = {
  beklemede: {
    label: "Beklemede",
    className:
      "inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
  },
  odendi: {
    label: "Ödendi",
    className:
      "inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700",
  },
};

const DetailItem = ({ label, value, emphasize = false, className = "" }) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 ${className}`}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
      {label}
    </p>
    <p
      className={`mt-2 text-sm ${
        emphasize
          ? "font-semibold text-slate-950"
          : "font-medium text-slate-700"
      }`}
    >
      {value}
    </p>
  </div>
);

const OdemeModal = ({ isOpen, onClose, selectedOdeme }) => {
  const closeAndReset = () => {
    onClose?.();
  };

  if (!isOpen) return null;

  const statusInfo = statusMap[selectedOdeme?.status] || {
    label: selectedOdeme?.status || "Bilinmiyor",
    className:
      "inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_80px_-24px_rgba(15,23,42,0.5)]">
        <div className="bg-linear-to-r from-slate-950 via-slate-900 to-blue-900 px-6 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Ödeme Durumu
              </h2>
              <p className="mt-1 text-sm text-slate-200">
                {selectedOdeme?.BayiUser?.magazaName || "Bayi"} için ödeme kaydı
                detayları
              </p>
            </div>
            <button
              type="button"
              onClick={closeAndReset}
              className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
            >
              Kapat
            </button>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <DetailItem
                label="Ödenecek Tutar"
                value={formatCurrency(selectedOdeme?.odenecekTutar)}
                emphasize
              />
              <DetailItem
                label="Toplam Tutar"
                value={formatCurrency(selectedOdeme?.toplamTutar)}
                emphasize
                className="bg-emerald-50"
              />
              <DetailItem
                label="Komisyon"
                value={formatCurrency(selectedOdeme?.komisyon)}
              />
              <DetailItem
                label="Stopaj"
                value={formatCurrency(selectedOdeme?.stopaj)}
              />
              <DetailItem
                label="Kargo"
                value={formatCurrency(selectedOdeme?.kargo)}
              />
              <DetailItem
                label="Ceza"
                value={formatCurrency(selectedOdeme?.ceza)}
              />
              <DetailItem
                label="Son Ödeme Tarihi"
                value={formatDate(selectedOdeme?.tarih)}
              />
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Ödeme Durumu
                </p>
                <div className="mt-2">
                  <span className={statusInfo.className}>
                    {statusInfo.label}
                  </span>
                </div>
              </div>
              <DetailItem
                label="Açıklama"
                value={selectedOdeme?.aciklama || "Açıklama bulunmuyor."}
                className="md:col-span-2"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Ödeme kaydını kapatabilir veya değişiklikleri kaydedebilirsiniz.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={closeAndReset}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Vazgeç
              </button>
              <button
                type="button"
                onClick={closeAndReset}
                className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdemeModal;
