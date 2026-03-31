"use client";

import setInfoRegister from "@/app/actions/Auth/setInfoRegister";
import Image from "next/image";
import React from "react";
import { useController, useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const FileDropzoneField = ({ control, name, label, error }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: null,
    rules: {
      required: `${label} alani zorunludur.`,
    },
  });

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      onChange(acceptedFiles?.[0] || null);
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="sm:col-span-1">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div
        {...getRootProps()}
        className={`mt-1 flex min-h-27.5 cursor-pointer items-center justify-center rounded-md border border-dashed px-3 py-4 text-center text-sm outline-none transition ${
          isDragActive
            ? "border-blue-500 bg-blue-50 text-blue-700"
            : "border-slate-300 text-slate-600 hover:border-blue-400"
        }`}
      >
        <input {...getInputProps()} />
        {value ? (
          <div className="space-y-1">
            <p className="font-medium text-slate-800">{value.name}</p>
            <p className="text-xs text-slate-500">
              Dosyayi degistirmek icin tiklayin ya da surukleyin.
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="font-medium text-slate-800">
              Dosyayi surukleyip birakin
            </p>
            <p className="text-xs text-slate-500">veya secmek icin tiklayin.</p>
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error.message}</p>
      ) : null}
    </div>
  );
};

const LoginClient = ({ user }) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      user,
      ...data,
    };

    const res = await setInfoRegister(formData);

    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Kayıt işleminiz başarıyla tamamlandı.",
        text: "Admin onayı sonrası hesabınız aktif hale gelecektir.",
      });
      window.location.reload();
    } else {
      await Swal.fire({
        icon: "error",
        title: "Kayıt işlemi sırasında bir hata oluştu.",
        text: "Lütfen daha sonra tekrar deneyiniz.",
      });
    }
  };
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="w-full">
            <Image
              src="/tammobillogo.webp"
              alt="Tammobil"
              width={1200}
              height={1200}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <FaPhoneSquareAlt size={22} className="text-blue-700" />
            <span className="whitespace-nowrap text-sm font-medium sm:text-base">
              0 (555) 555 55 55
            </span>
          </div>
        </div>

        <div className="px-4 py-6 sm:px-6 sm:py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Hesap Bilgileri
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Sirket ve ticari bilgilerinizi eksiksiz doldurun.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            <div className="sm:col-span-2 mb-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-semibold text-blue-900">
                1-) Sirket Bilgileri
              </p>
              <p className="mt-1 text-sm text-blue-800">
                Vergi ve iletisim bilgilerinizi girin.
              </p>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-slate-700"
              >
                Cep Telefonu
              </label>
              <input
                type="text"
                id="tel"
                {...register("tel", {
                  required: "Cep telefonu alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="identityNumber"
                className="block text-sm font-medium text-slate-700"
              >
                TC Kimlik
              </label>
              <input
                type="text"
                id="identityNumber"
                {...register("identityNumber", {
                  required: "TC Kimlik alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="sirketName"
                className="block text-sm font-medium text-slate-700"
              >
                Sirket Adi
              </label>
              <input
                type="text"
                id="sirketName"
                {...register("sirketName", {
                  required: "Sirket adi alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="vergiNo"
                className="block text-sm font-medium text-slate-700"
              >
                Vergi Kimlik No
              </label>
              <input
                type="text"
                id="vergiNo"
                {...register("vergiNo", {
                  required: "Vergi kimlik no alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="vergiDairesi"
                className="block text-sm font-medium text-slate-700"
              >
                Vergi Dairesi
              </label>
              <input
                type="text"
                id="vergiDairesi"
                {...register("vergiDairesi", {
                  required: "Vergi dairesi alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="sm:col-span-2 mb-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-semibold text-blue-900">
                2-) Ticari Bilgiler
              </p>
              <p className="mt-1 text-sm text-blue-800">
                Ödeme ve faturalama bilgilerinizi girin.
              </p>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="iban"
                className="block text-sm font-medium text-slate-700"
              >
                IBAN{" "}
                <span className="text-gray-400">
                  Şirket ibanının girilmesi zorunludur.
                </span>
              </label>
              <input
                type="text"
                id="iban"
                placeholder="TR00 0000 0000 0000 0000 0000 00"
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                defaultValue="TR"
                maxLength={32}
                {...register("iban", {
                  required: true,
                  setValueAs: (value) => {
                    const raw = (value || "").toUpperCase().replace(/\s+/g, "");
                    const numericPart = raw
                      .replace(/^TR/, "")
                      .replace(/\D/g, "")
                      .slice(0, 24);
                    return `TR${numericPart}`;
                  },
                  onChange: (e) => {
                    const raw = (e.target.value || "")
                      .toUpperCase()
                      .replace(/\s+/g, "")
                      .replace(/[^A-Z0-9]/g, "");

                    const numericPart = raw
                      .replace(/^TR/, "")
                      .replace(/\D/g, "")
                      .slice(0, 24);

                    const groups = [2, 4, 4, 4, 4, 4, 2];
                    let start = 0;
                    const formattedParts = groups
                      .map((len) => {
                        const part = numericPart.slice(start, start + len);
                        start += len;
                        return part;
                      })
                      .filter(Boolean);

                    e.target.value = `TR${formattedParts.join(" ")}`;
                  },
                  pattern: /^TR\d{24}$/,
                })}
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="ibanName"
                className="block text-sm font-medium text-slate-700"
              >
                IBAN Alıcı İsmi
              </label>
              <input
                type="text"
                id="ibanName"
                {...register("ibanName", {
                  required: "IBAN alıcı ismi alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="magazaName"
                className="block text-sm font-medium text-slate-700"
              >
                Mağaza İsmi
              </label>
              <input
                type="text"
                id="magazaName"
                {...register("magazaName", {
                  required: "Mağaza ismi alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="sirketAdres"
                className="block text-sm font-medium text-slate-700"
              >
                Şirket Adresi
              </label>
              <input
                type="text"
                id="sirketAdres"
                {...register("sirketAdres", {
                  required: "Şirket adresi alani zorunludur.",
                })}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-2 mb-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-semibold text-blue-900">
                3-) Belgeler
              </p>
              <p className="mt-1 text-sm text-blue-800">
                Vergi levhası ve sözleşme belgelerinizi yükleyin.
              </p>
            </div>

            <FileDropzoneField
              control={control}
              name="vergiLevhası"
              label="Vergi Levhası"
              error={errors["vergiLevhası"]}
            />
            <FileDropzoneField
              control={control}
              name="imzaSirkuleri"
              label="İmza Sirküleri"
              error={errors["imzaSirkuleri"]}
            />
            <FileDropzoneField
              control={control}
              name="ticaretSicilGazetesi"
              label="Ticaret Sicil Gazetesi"
              error={errors["ticaretSicilGazetesi"]}
            />
            <FileDropzoneField
              control={control}
              name="kimlikFotokopisi"
              label="Kimlik Ön ve Arka Fotokopisi"
              error={errors["kimlikFotokopisi"]}
            />
            <FileDropzoneField
              control={control}
              name="sozlesme"
              label="Tammobil Sözleşmesi (imzalı)"
              error={errors["sozlesme"]}
            />

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
              >
                Başvuruyu Tamamla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
