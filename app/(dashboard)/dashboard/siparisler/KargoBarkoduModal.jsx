import React, { useRef } from "react";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";

const KargoBarkoduModal = ({ open, onClose, selectedOrder }) => {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `kargo-barkodu`,
    pageStyle: `
      @page {
        size: A5 portrait;
        margin: 10mm;
      }
      @media print {
        html, body {
          width: 148mm;
          height: 210mm;
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        #print-area {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: none !important;
        }
      }
    `,
  });

  if (!open) return null;

  const cargoID = selectedOrder?.kargoID || "1234567890";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6 max-h-[90vh] overflow-y-auto">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">Kargo Barkodu</h2>
          <p className="mt-1 text-sm text-slate-500">
            Barkodu kontrol edip yazdırabilirsiniz.
          </p>
        </div>

        {/* PRINT AREA */}
        <div
          id="print-area"
          ref={printRef}
          className="mx-auto rounded-xl border-2 border-slate-900 bg-white p-6"
          style={{
            width: "148mm",
            minHeight: "210mm",
            boxSizing: "border-box",
          }}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
            <span className="text-xl font-black tracking-widest text-slate-900">
              TAMMOBİL
            </span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
              Yurtiçi Kargo
            </span>
          </div>

          {/* BARKOD */}
          <div className="mt-8 flex flex-col items-center text-center">
            <Barcode
              value={cargoID}
              width={2}
              height={90}
              margin={0}
              displayValue={false}
            />
            <p className="mt-3 text-base font-bold tracking-[0.25em] text-slate-900">
              {cargoID}
            </p>
          </div>

          {/* ALT BİLGİ */}
          <div className="mt-auto pt-12 border-t border-slate-200 flex items-end justify-between">
            <p className="text-xs text-slate-400">tammobil.com</p>
            <p className="text-xs text-slate-500">
              {new Date().toLocaleDateString("tr-TR")}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={handlePrint}
            className="h-10 rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Yazdır
          </button>
          <button
            className="h-10 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default KargoBarkoduModal;
