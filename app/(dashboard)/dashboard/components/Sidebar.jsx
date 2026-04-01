"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import {
  MdLogout,
  MdDiscount,
  MdOutlinePhoneIphone,
  MdPayments,
  MdReceiptLong,
  MdOutlineTimer,
  MdSell,
  MdCampaign,
  MdStorefront,
  MdInsights,
  MdAssignmentReturn,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { signOut } from "next-auth/react";
export default function Sidebar({ user }) {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const pathname = usePathname();
  const router = useRouter();

  const baseNavItemClass =
    "group w-full rounded-xl px-2 py-2 text-[11px] uppercase tracking-[0.11em] font-semibold flex flex-row items-center justify-start transition-all duration-200";

  const getNavItemClass = (isActive) =>
    `${baseNavItemClass} ${
      isActive
        ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg shadow-slate-300/70"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  const logout = () => {
    signOut();
    router.replace("/giris-yap");
    router.refresh();
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-2xl bg-white/95 border-r border-slate-200 backdrop-blur-sm flex flex-wrap items-center justify-between relative md:w-68 z-10 py-5 px-5">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div className="w-full flex rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-100 p-4">
            <div className="inline-flex w-full flex-col text-left md:pb-2 mr-0 whitespace-nowrap">
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                Tammobil Bayi Paneli
              </span>
              <span className="mt-2 text-sm font-bold text-slate-900 tracking-wide">
                {user?.magazaName || "Bayi Hesabı"}
              </span>
            </div>
            {/* Toggler */}
            <button
              className="cursor-pointer text-slate-700 md:hidden px-3 py-2 text-xl leading-none rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
              type="button"
              onClick={() =>
                setCollapseShow(
                  "bg-white m-2 py-4 px-4 border border-slate-200 rounded-2xl shadow-2xl",
                )
              }
            >
              <HiMiniBars3 size={24} />
            </button>
          </div>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-2 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded-2xl " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/dashboard"
                    className="md:block text-left md:pb-2 text-slate-700 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 tracking-wide"
                  >
                    Tammobil Bayi Paneli
                  </Link>
                </div>

                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-slate-700 md:hidden px-3 py-2 text-xl leading-none rounded-lg border border-slate-200 bg-slate-50"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <HiMiniBars3 size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <Link
                  href="/dashboard"
                  className={getNavItemClass(pathname === "/dashboard")}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <FaHome
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ANASAYFA
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/urunler"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/urunler") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdOutlinePhoneIphone
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ÜRÜNLER
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-[10px] uppercase tracking-[0.18em] font-bold block pt-1 pb-2 no-underline">
              SATIŞ
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <Link
                  href="/dashboard/siparisler"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/siparisler") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <FaShopify
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  SİPARİŞLER
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/komisyon-hesaplama"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/komisyon-hesaplama") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdDiscount
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  KOMİSYON HESAPLAMA
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-[10px] uppercase tracking-[0.18em] font-bold block pt-1 pb-2 no-underline">
              FİNANS
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <Link
                  href="/dashboard/odemeler"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/odemeler") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdPayments
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ÖDEMELER
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/faturalar"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/faturalar") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdReceiptLong
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  FATURALAR
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/erken-odeme"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/erken-odeme") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdOutlineTimer
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ERKEN ÖDEME
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-[10px] uppercase tracking-[0.18em] font-bold block pt-1 pb-2 no-underline">
              HIZLI SATIŞ
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <Link
                  href="/dashboard/bize-sat"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/bize-sat") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdSell
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  BİZE SAT
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/komisyon-kampanyasi"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/komisyon-kampanyasi") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdCampaign
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  KOMİSYON KAMPANYASI
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/bayiye-sat"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/bayiye-sat") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdStorefront
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  BAYİ'YE SAT
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-[10px] uppercase tracking-[0.18em] font-bold block pt-1 pb-2 no-underline">
              RAPORLAR
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <Link
                  href="/dashboard/satis-raporu"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/satis-raporu") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdInsights
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  SATIŞ RAPORU
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/iade-raporu"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/iade-raporu") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdAssignmentReturn
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  İADE RAPORU
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/dashboard/odeme-raporu"
                  className={getNavItemClass(
                    pathname.indexOf("/dashboard/odeme-raporu") !== -1,
                  )}
                  onClick={() => setCollapseShow("hidden")}
                >
                  <MdAccountBalanceWallet
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ÖDEME RAPORU
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full border-slate-200" />

            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-[10px] uppercase tracking-[0.18em] font-bold block pt-1 pb-2 no-underline">
              DİĞER
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-1">
              <li className="items-center">
                <div
                  className={
                    "group text-[11px] cursor-pointer uppercase tracking-[0.12em] py-3 px-3 rounded-xl font-semibold flex flex-row items-center justify-start transition-all duration-200 " +
                    (pathname.indexOf("/dashboard/logout") !== -1
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-red-600 hover:bg-red-50")
                  }
                  onClick={() => {
                    setCollapseShow("hidden");
                    logout();
                  }}
                >
                  <MdLogout
                    size={20}
                    className={
                      "mr-3 transition-transform duration-200 group-hover:scale-110"
                    }
                  />
                  ÇIKIŞ YAP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
