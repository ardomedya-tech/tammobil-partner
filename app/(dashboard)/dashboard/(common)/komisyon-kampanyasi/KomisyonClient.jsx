"use client";
import { useState } from "react";
import Swal from "sweetalert2";
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
import {
  FaChevronDown,
  FaChevronUp,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import "./tablecss.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import putKomisyonStatus from "@/app/actions/HizliSatis/putKomisyonStatus";

const KomisyonClient = (props) => {
  const pdata = props.products || [];
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredData =
    search === ""
      ? pdata
      : pdata?.filter(
          (data) =>
            data?.id?.toString().includes(search?.toLowerCase()) ||
            data?.name?.toLowerCase().includes(search?.toLowerCase()),
        );
  const data = { nodes: filteredData };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: 1.5fr 1.2fr 1.2fr 1.2fr 1.2fr;
      border-collapse: separate;
      border-spacing: 0;
      min-width: 900px;
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

  const kampanyayaKatıl = (item) => {
    Swal.fire({
      title: "Kampanya'ya Katıl",
      text: `${item?.name} ürününü komisyon kampanyasına katılmak istediğinize emin misiniz?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet, Katıl",
      cancelButtonText: "Hayır, Vazgeç",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await putKomisyonStatus(item);
        if (res) {
          Swal.fire(
            "Başarılı!",
            `${item?.name} ürünü komisyon kampanyasına katıldı.`,
            "success",
          );
          router.refresh();
        } else {
          Swal.fire(
            "Hata!",
            `${item?.name} ürünü komisyon kampanyasına katılırken bir hata oluştu.`,
            "error",
          );
        }
      }
    });
  };
  return (
    <>
      <div className="flex w-full flex-col gap-4 pt-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                Komisyon Kampanyalı Ürün Listesi
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Komisyon kampanyasına dahil olan ürünlerin listesini buradan
                görüntüleyebilir ve yönetebilirsiniz.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Ürün no veya adına göre ara"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-200/60 sm:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
                    <HeaderCellSort sortKey="NAME">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ürün Adı
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Fiyat
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Komisyon Kampanyası
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Kampanya Durumu
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Kampanya Katıl
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
                            href={`/dashboard/urunler/${item.id}`}
                            className="font-semibold text-sky-700 transition hover:text-sky-800"
                          >
                            {item?.name}
                          </Link>
                        </Cell>
                        <Cell>
                          <span className="font-medium text-slate-700">
                            {item?.price} ₺
                            {item?.inprice ? (
                              <span className="ml-1 text-slate-400">
                                / {item?.inprice} ₺
                              </span>
                            ) : null}
                          </span>
                        </Cell>
                        <Cell>
                          <span className="font-medium text-slate-700">
                            %{item?.bayiKomisyonOran} Komisyon İndirimi
                          </span>
                        </Cell>
                        <Cell>
                          {item?.bayiKomisyonStatus === "pasif" && (
                            <span className="text-sm rounded text-yellow-600 bg-yellow-100 p-2">
                              Pasif
                            </span>
                          )}
                          {item?.bayiKomisyonStatus === "aktif" && (
                            <span className="text-sm rounded text-blue-600 bg-blue-100 p-2">
                              Aktif
                            </span>
                          )}
                          {item?.bayiKomisyonStatus === "onaylandi" && (
                            <span className="text-sm rounded text-orange-600 bg-orange-100 p-2">
                              Katıldınız
                            </span>
                          )}
                        </Cell>
                        <Cell>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                              onClick={() => {
                                kampanyayaKatıl(item);
                              }}
                            >
                              Kampanya'ya Katıl
                            </button>
                          </div>
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

export default KomisyonClient;
