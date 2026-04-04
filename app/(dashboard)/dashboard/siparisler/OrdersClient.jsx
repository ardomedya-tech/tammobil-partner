"use client";
import { useState, useMemo } from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
  SortToggleType,
} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { FaChevronDown, FaChevronUp, FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import KargoBarkoduModal from "./KargoBarkoduModal";
import putOrderStatus from "@/app/actions/Order/putOrderStatus";
import Swal from "sweetalert2";
const formatCurrency = (value) =>
  `${Number(value || 0).toLocaleString("tr-TR")} ₺`;

const OrdersClient = (props) => {
  const pdata = props.orders || [];
  const [orderData, setOrderData] = useState(pdata);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [kargoBarkoduModalOpen, setKargoBarkoduModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredData = useMemo(() => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (end) {
      end.setHours(23, 59, 59, 999);
    }

    return orderData.filter((item) => {
      const itemDate = new Date(item?.createdAt);
      const isInDateRange =
        (!start || itemDate >= start) && (!end || itemDate <= end);
      const isStatusMatch =
        filterStatus === "all" || item?.status === filterStatus;

      const searchValue = search.trim().toLowerCase();
      const isSearchMatch =
        searchValue === "" ||
        item?.id?.toString().includes(searchValue) ||
        item?.name?.toLowerCase().includes(searchValue) ||
        item?.Product?.name?.toLowerCase().includes(searchValue) ||
        item?.Product?.imei?.toLowerCase().includes(searchValue);

      return isInDateRange && isStatusMatch && isSearchMatch;
    });
  }, [orderData, startDate, endDate, filterStatus, search]);

  const statusFilters = [
    { key: "all", label: "Tüm Siparişler" },
    { key: "yeni-siparis", label: "Yeni Sipariş" },
    { key: "kargo", label: "Kargolanan" },
    { key: "teslim-edildi", label: "Teslim Edilen" },
    { key: "iade", label: "İade Edilen" },
    { key: "iptal", label: "İptal Edilen" },
  ];
  const data = { nodes: filteredData };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: 100px 1fr 120px 1fr 130px 160px 90px;
      border-collapse: separate;
      border-spacing: 0;
      min-width: 920px;
    `,
    HeaderRow: `
      background: #f8fafc;
    `,
    Row: `
      border-bottom: 1px solid #e2e8f0;
      &:last-of-type {
        border-bottom: 0;
      }
      &:hover {
        background: #f8fafc;
      }
    `,
    BaseCell: `
      padding: 14px 16px;
      font-size: 14px;
      color: #334155;
      align-items: center;
    `,
  });
  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortToggleType: SortToggleType.AlternateWithReset,
      sortFns: {
        NAME: (array) => array.sort((a, b) => a?.name?.localeCompare(b?.name)),
      },
    },
  );

  function onSortChange(action, state) {
    //console.log(action, state);
  }
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });
  function onPaginationChange(action, state) {}

  const totalPage = pagination?.state?.getTotalPages(data.nodes);

  const setKargoDurumu = async (id, durum) => {
    try {
      const res = await putOrderStatus(id, durum);

      if (res === true) {
        await Swal.fire({
          icon: "success",
          title: "Başarılı",
          text: "Kargo durumu başarıyla güncellendi.",
        });
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Hata",
          text: "Kargo durumu güncellenemedi.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Durum güncellenirken bir hata oluştu.",
      });
    }
  };
  return (
    <>
      <KargoBarkoduModal
        open={kargoBarkoduModalOpen}
        onClose={() => {
          setKargoBarkoduModalOpen(false);
          setKargoDurumu(selectedOrder?.id, "kargo");
        }}
        selectedOrder={selectedOrder}
      />
      <div className="flex w-full flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4">
            {/* Başlık */}
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                Sipariş Listesi
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Siparişleri arayabilir, barkod oluşturabilir ve detay sayfasına
                geçebilirsiniz.
              </p>
            </div>

            {/* Tarih & Arama Filtreleri */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium text-slate-500 whitespace-nowrap">
                  Başlangıç
                </label>
                <input
                  type="date"
                  id="date_new"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <span className="hidden text-slate-400 sm:block">—</span>
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium text-slate-500 whitespace-nowrap">
                  Bitiş
                </label>
                <input
                  type="date"
                  id="date_old"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              {(startDate || endDate) && (
                <button
                  type="button"
                  onClick={() => {
                    setStartDate("");
                    setEndDate("");
                  }}
                  className="text-xs font-medium text-red-500 hover:text-red-700 transition"
                >
                  Tarihi Temizle
                </button>
              )}
              <div className="flex-1 sm:min-w-55 sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Sipariş no, ad veya ürün ara..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Durum Filtreleri */}
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((statusItem) => (
                <button
                  key={statusItem.key}
                  type="button"
                  onClick={() => setFilterStatus(statusItem.key)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    filterStatus === statusItem.key
                      ? "border-blue-500 bg-blue-500 text-white shadow-md shadow-blue-500/30"
                      : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {statusItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Table
            data={data}
            sort={sort}
            theme={theme}
            pagination={pagination}
            layout={{ custom: true, horizontalScroll: true }}
          >
            {(tableList) => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Sipariş No
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ürün Adı
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Satış Miktarı
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Satın Alan
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Durumu
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Aksiyonlar
                      </span>
                    </HeaderCellSort>

                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Düzenle/Sil
                      </span>
                    </HeaderCellSort>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList?.map((item) => {
                    return (
                      <Row key={item?.id}>
                        <Cell>
                          <Link
                            href={`/dashboard/siparisler/${item.id}`}
                            className="font-semibold text-sky-700 transition hover:text-sky-800"
                          >
                            #{item?.id}
                          </Link>
                        </Cell>

                        <Cell>
                          <span className="font-medium text-slate-700">
                            {item?.Product?.name} {item?.BayiProduct?.name}
                          </span>
                        </Cell>
                        <Cell>
                          {formatCurrency(
                            item?.BayiProduct
                              ? item?.BayiProduct?.price
                              : item?.Product?.indirim === true
                                ? item?.Product?.inprice
                                : item?.Product?.price,
                          )}
                        </Cell>
                        <Cell>
                          <span className="font-medium text-slate-700">
                            {item?.name} {item?.lastname}
                          </span>
                        </Cell>
                        <Cell>
                          {item?.status === "yeni-siparis" && (
                            <span className="text-sm rounded text-yellow-600 bg-yellow-100 p-2">
                              Yeni Satış
                            </span>
                          )}
                          {item?.status === "kargo" && (
                            <span className="text-sm rounded text-blue-600 bg-blue-100 p-2">
                              Kargolandı
                            </span>
                          )}
                          {item?.status === "teslim-edildi" && (
                            <span className="text-sm rounded text-orange-600 bg-orange-100 p-2">
                              Teslim Edildi
                            </span>
                          )}
                          {item?.status === "iade" && (
                            <span className="text-sm rounded text-teal-600 bg-teal-100 p-2">
                              İade Edildi
                            </span>
                          )}
                          {item?.status === "iptal" && (
                            <span className="text-sm rounded text-purple-600 bg-purple-100 p-2">
                              İptal Edildi
                            </span>
                          )}
                        </Cell>
                        <Cell>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                              onClick={() => {
                                setKargoBarkoduModalOpen(true);
                                setSelectedOrder(item);
                              }}
                            >
                              Kargo Barkodu
                            </button>
                          </div>
                        </Cell>

                        <Cell>
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
                            onClick={() => {
                              router.push(`/dashboard/siparisler/${item?.id}`);
                            }}
                          >
                            <FaRegEdit size={16} />
                          </button>
                        </Cell>
                      </Row>
                    );
                  })}
                </Body>
              </>
            )}
          </Table>
        </div>
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-semibold text-slate-700">
              Toplam sayfa: {totalPage}
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Sayfa: {pagination?.state?.page + 1}
              </span>

              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page === 0}
                onClick={() => pagination.fns.onSetPage(0)}
              >
                {"|<"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page === 0}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page - 1)
                }
              >
                {"<"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page + 1 === totalPage}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page + 1)
                }
              >
                {">"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page + 1 === totalPage}
                onClick={() => pagination.fns.onSetPage(totalPage - 1)}
              >
                {">|"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersClient;
