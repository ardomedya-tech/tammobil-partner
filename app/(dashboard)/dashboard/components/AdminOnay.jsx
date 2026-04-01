import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaRegClock,
} from "react-icons/fa";

const AdminOnay = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="w-full">
              <Image
                src="/tammobillogo.webp"
                alt="Tammobil"
                width={1200}
                height={1200}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700">
              <FaPhoneSquareAlt size={18} className="text-slate-600" />
              <span className="whitespace-nowrap text-sm font-medium">
                0 (850) 309 69 69
              </span>
            </div>
          </div>

          <div className="grid gap-8 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-5 text-slate-900">
              <div className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
                <FaRegClock className="text-amber-700" />
                Onay sureci devam ediyor
              </div>

              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Hesabiniz onay bekliyor
              </h1>

              <p className="max-w-xl text-sm text-slate-700 sm:text-base">
                {user?.sirketName
                  ? `${user.sirketName} basvurunuz ilgili birimlerimiz tarafindan degerlendirilmektedir.`
                  : "Basvurunuz ilgili birimlerimiz tarafindan degerlendirilmektedir."}{" "}
                Evrak kontrolu tamamlandiginda hesabiniz aktif hale
                getirilecektir.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Bilgilendirme
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Inceleme sonucu tamamlandiginda kayitli e-posta adresinize
                  resmi bilgilendirme iletilecektir.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-800">
              <h2 className="text-lg font-semibold text-slate-900">
                Basvuru durumu
              </h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                  <FaCheckCircle className="mt-0.5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">
                      Basvuru Alindi
                    </p>
                    <p className="text-xs text-emerald-800">
                      Form ve belgeleriniz sistemimize basarili sekilde
                      ulasmistir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <FaRegClock className="mt-0.5 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Admin Incelemesi
                    </p>
                    <p className="text-xs text-amber-800">
                      Uygunluk kontrolu devam ediyor. Ek belge ihtiyaci olmasi
                      halinde sizinle iletisime gecilecektir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 p-3">
                  <FaEnvelope className="mt-0.5 text-sky-700" />
                  <div>
                    <p className="text-sm font-semibold text-sky-900">
                      Bildirim
                    </p>
                    <p className="text-xs text-sky-800">
                      Sonuc tarafiniza e-posta yoluyla bildirilecektir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOnay;
