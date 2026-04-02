"use client";
import React, { useEffect, useState } from "react";

const KomisyonClient = () => {
  const [alisTutari, setAlisTutari] = useState("");
  const [satisTutari, setSatisTutari] = useState("");
  const [kargoUcreti, setKargoUcreti] = useState(200);
  const [komisyon, setKomisyon] = useState("");
  const [tahminiKazanc, setTahminiKazanc] = useState("");
  const kdvOrani = 0.2;

  useEffect(() => {
    const calculateKomisyon = () => {
      const komisyonTutar = satisTutari ? satisTutari * 0.15 : 0;
      setKomisyon(komisyonTutar);
      const stopajTutar = satisTutari ? satisTutari * 0.01 : 0;
      const tahminiKazancTutar = (
        satisTutari -
        alisTutari -
        komisyonTutar -
        stopajTutar -
        kargoUcreti -
        15
      ).toFixed(2);
      setTahminiKazanc(tahminiKazancTutar);
    };
    calculateKomisyon();
  }, [alisTutari, satisTutari]);

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  const readonlyClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-semibold focus:outline-none cursor-default";

  const resultClass =
    "w-full px-4 py-3 rounded-xl border-2 border-blue-500 bg-blue-50 text-blue-700 text-base font-bold focus:outline-none cursor-default";

  return (
    <div className="w-full mt-6 bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-blue-500">
        <h2 className="text-white text-lg font-semibold tracking-tight">
          Komisyon Hesaplama
        </h2>
        <p className="text-blue-100 text-xs mt-0.5">
          Satış gelirinizi hesaplayın
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* Input Alanları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Alış Tutarı */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Alış Tutarı
            </label>
            <input
              type="number"
              placeholder="0.00 ₺"
              value={alisTutari}
              onChange={(e) => setAlisTutari(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Satış Tutarı */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Satış Tutarı
            </label>
            <input
              type="number"
              placeholder="0.00 ₺"
              value={satisTutari}
              onChange={(e) => setSatisTutari(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Kesintiler Başlığı */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Kesintiler
          </span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Kesintiler Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Kargo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Kargo Ücreti
            </label>
            <div className="relative">
              <input
                type="number"
                value={200}
                readOnly
                className={readonlyClass}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                Sabit ₺
              </span>
            </div>
          </div>

          {/* Komisyon */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Komisyon{" "}
              <span className="normal-case text-slate-400">
                (%15 KDV Dahil)
              </span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={komisyon ? Number(komisyon).toFixed(2) : "0.00"}
                readOnly
                className={readonlyClass}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                ₺
              </span>
            </div>
          </div>

          {/* Stopaj */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Stopaj{" "}
              <span className="normal-case text-slate-400">(%1 Alış)</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={satisTutari ? (satisTutari * 0.01).toFixed(2) : "0.00"}
                readOnly
                className={readonlyClass}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                ₺
              </span>
            </div>
          </div>
        </div>

        {/* Platform Hizmet */}
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Platform Hizmet Bedeli
            </p>
            <p className="text-xs text-slate-400 mt-0.5">KDV Dahil</p>
          </div>
          <span className="text-sm font-bold text-slate-700">15 ₺</span>
        </div>

        {/* Tahmini Kazanç */}
        <div className="flex flex-col gap-1.5 pt-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Tahmini Kazanç
          </label>
          <div
            className={`flex items-center px-4 py-3.5 rounded-xl border-2 ${
              Number(tahminiKazanc) >= 0
                ? "border-emerald-400 bg-emerald-50"
                : "border-red-400 bg-red-50"
            }`}
          >
            <span
              className={`flex-1 text-lg font-bold ${
                Number(tahminiKazanc) >= 0 ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {tahminiKazanc
                ? `${Number(tahminiKazanc).toLocaleString("tr-TR", { minimumFractionDigits: 2 })} ₺`
                : "— ₺"}
            </span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-lg ${
                Number(tahminiKazanc) >= 0
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {Number(tahminiKazanc) >= 0 ? "Kâr" : "Zarar"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KomisyonClient;
