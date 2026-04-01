"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import setRegister from "@/app/actions/Auth/setRegister";

const GirisClient = () => {
  const [activeTab, setActiveTab] = useState("giris");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const router = useRouter();

  const onSignIn = async () => {
    if (!email || !password) {
      setError("Lütfen email ve şifrenizi girin.");
      return;
    }

    try {
      setError("");
      setIsLoginLoading(true);
      const { ok, error } = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (ok) {
        await Swal.fire({
          icon: "success",
          title: "Hoşgeldiniz",
          showConfirmButton: false,
          timer: 1200,
        });
        router.push("/dashboard");
        router.refresh();
      }
      if (error) {
        setError(error);
      }
    } catch {
      setError("Giriş sırasında bir hata oluştu.");
    } finally {
      setIsLoginLoading(false);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setError("");
      setIsRegisterLoading(true);
      const res = await setRegister(data);
      if (res.status === true) {
        await Swal.fire({
          icon: "success",
          title: "Kayıt Başarılı!",
          showConfirmButton: false,
          timer: 1200,
        });
        const { ok, error } = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (ok) {
          await Swal.fire({
            icon: "success",
            title: "Hoşgeldiniz",
            showConfirmButton: false,
            timer: 1200,
          });
          router.push("/dashboard");
          router.refresh();
        }

        if (error) {
          setError(error);
        }
      } else {
        setError(res.message);
      }
    } catch {
      setError("Kayıt sırasında bir hata oluştu.");
    } finally {
      setIsRegisterLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-6 md:p-8">
          <div className="mb-6 flex rounded-2xl border border-slate-200 bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => {
                setError("");
                setActiveTab("giris");
              }}
              className={`w-1/2 rounded-xl px-4 py-2 text-sm font-semibold transition md:text-base ${
                activeTab === "giris"
                  ? "bg-white text-slate-900 shadow"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Giris Yap
            </button>
            <button
              type="button"
              onClick={() => {
                setError("");
                setActiveTab("kayit");
              }}
              className={`w-1/2 rounded-xl px-4 py-2 text-sm font-semibold transition md:text-base ${
                activeTab === "kayit"
                  ? "bg-white text-slate-900 shadow"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Kayit Ol
            </button>
          </div>

          {activeTab === "giris" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSignIn();
              }}
              className="w-full h-full space-y-4"
            >
              <div className="space-y-2">
                <label
                  htmlFor="login-email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                  placeholder="ornek@mail.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="login-password"
                  className="text-sm font-medium text-slate-700"
                >
                  Sifre
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                  placeholder="********"
                />
              </div>

              {error ? (
                <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isLoginLoading}
                className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoginLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("kayit")}
                className="w-full text-center text-sm text-slate-600 hover:text-slate-900"
              >
                Hesabın yok mu? Kayıt ol
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Ad
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ad"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                    {...register("name", { required: "Ad alanı zorunludur." })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Soyad
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Soyad"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                    {...register("lastname", {
                      required: "Soyad alanı zorunludur.",
                    })}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="Email"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                  {...register("email", {
                    required: "Email alanı zorunludur.",
                  })}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Şifre
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    placeholder="Sifre"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                    {...register("password", {
                      required: "Şifre alanı zorunludur.",
                      minLength: {
                        value: 6,
                        message: "Şifre en az 6 karakter olmalıdır.",
                      },
                    })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Şifre (Tekrar)
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Sifre (Tekrar)"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-500"
                    {...register("confirmPassword", {
                      required: "Şifre tekrarı zorunludur.",
                      validate: (value, formValues) =>
                        value === formValues.password || "Şifreler eşleşmiyor.",
                    })}
                  />
                </div>
              </div>
              <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                  {...register("terms", {
                    required: "Devam etmek için sözleşmeyi kabul etmelisiniz.",
                  })}
                />
                <span>
                  Üyelik Sözleşmesi ve Aydınlatma Metnini okudum, kabul
                  ediyorum.
                </span>
              </label>

              {errors?.name?.message ||
              errors?.lastname?.message ||
              errors?.phone?.message ||
              errors?.email?.message ||
              errors?.password?.message ||
              errors?.confirmPassword?.message ||
              errors?.terms?.message ? (
                <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                  {errors?.name?.message ||
                    errors?.lastname?.message ||
                    errors?.phone?.message ||
                    errors?.email?.message ||
                    errors?.password?.message ||
                    errors?.confirmPassword?.message ||
                    errors?.terms?.message}
                </p>
              ) : null}

              {error ? (
                <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isRegisterLoading}
                className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isRegisterLoading ? "Kayıt Oluşturuluyor..." : "Kayıt Ol"}
              </button>

              <button
                type="button"
                onClick={() => {
                  reset();
                  setError("");
                  setActiveTab("giris");
                }}
                className="w-full text-center text-sm text-slate-600 hover:text-slate-900"
              >
                Zaten hesabın var mı? Giriş yap
              </button>
            </form>
          )}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white shadow-[0_12px_35px_rgba(8,47,73,0.35)] sm:p-8 md:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky-300/25 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100">
                TAMMOBIL PARTNER PANEL
              </span>
              <h1 className="max-w-xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                İşinizi Tammobil ile Dijitalleştirin
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Siparişten ödemeye, stoktan yeniden satışa kadar tüm akışı tek
                panelde yönetin. Hızınızı artırın, operasyonlarınızı
                sadeleştirin.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-extrabold">100+</p>
                <p className="text-xs uppercase tracking-wide text-cyan-100">
                  Aktif Bayi
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-extrabold">10K+</p>
                <p className="text-xs uppercase tracking-wide text-cyan-100">
                  Aylık Sipariş
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-extrabold">200K+</p>
                <p className="text-xs uppercase tracking-wide text-cyan-100">
                  Aktif Üye
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GirisClient;
