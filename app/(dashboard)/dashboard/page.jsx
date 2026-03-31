import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/Products/getProducts";
import Image from "next/image";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();
  const products = await getProducts(user?.id);

  const topProducts = [...(products || [])]
    .sort((a, b) => (b?.onclick || 0) - (a?.onclick || 0))
    .slice(0, 5);

  return (
    <div className="w-full h-full flex flex-col gap-6 pb-4">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-linear-to-br from-slate-900 via-blue-950 to-cyan-900 px-6 py-7 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.85)] md:px-8">
        <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
            Tammobil Partner Panel
          </p>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Mağaza Özeti
          </h1>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-500 to-teal-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Günlük Satış
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            12.500 TL
          </span>
          <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            3 Satış
          </span>
          <p className="mt-2 text-xs font-medium text-emerald-600">
            +5.2% Dünden bugüne
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-blue-500 to-cyan-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Toplam Satış
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            125.000 TL
          </span>
          <span className="mt-1 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            150 Satış
          </span>
          <p className="mt-2 text-xs font-medium text-blue-600">
            +12.5% Geçen aya göre
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-fuchsia-500 to-rose-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            İadeler
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            0
          </span>
          <p className="mt-2 text-xs text-slate-500">
            Son 30 günde iade bulunmuyor
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-amber-500 to-orange-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Toplam Ürünler
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            {products?.length || 0}
          </span>
          <p className="mt-2 text-xs text-slate-500">Yayındaki ürün sayısı</p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-indigo-500 to-violet-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Mağaza Puanı
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            {user?.score || 0}/10
          </span>
          <p className="mt-2 text-xs text-slate-500">
            Müşteri geri bildirim ortalaması
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-500 to-lime-400" />
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Hakediş Tutarı
          </h5>
          <span className="mt-2 block text-3xl font-semibold text-slate-900">
            35.000 TL
          </span>
          <p className="mt-2 text-xs text-slate-500">
            Ödeme dönemi tahmini hakediş
          </p>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            En Çok Popüler Ürünler
          </h2>
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
            Top 5
          </span>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ürün Resmi
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ürün Adı
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Fiyatı
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Tıklanma
                </th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((item) => (
                <tr
                  key={item?.id}
                  className="border-t border-slate-100 transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1">
                        <Image
                          src={item?.images?.[0]}
                          alt="Urun"
                          width={150}
                          height={150}
                          className="h-full w-full object-contain"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm font-medium text-slate-700">
                    {item?.name}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">
                    {item?.price} TL
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                      {item?.onclick || 0}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {topProducts.length === 0 && (
            <div className="px-6 py-8 text-center text-sm text-slate-500">
              Gösterilecek ürün bulunamadı.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
