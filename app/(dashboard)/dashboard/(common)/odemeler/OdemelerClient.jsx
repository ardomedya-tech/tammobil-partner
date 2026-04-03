"use client";
import { useState } from "react";
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
import OdemeModal from "./OdemeModal";

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

const statusBadge = {
  beklemede:
    "rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700",
  odendi:
    "rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700",
};

const OdemelerClient = ({ odemeler }) => {
  const pdata = odemeler || [];

  const data = { nodes: pdata };

  const [odemeModalOpen, setOdemeModalOpen] = useState(false);
  const [selectedOdeme, setSelectedOdeme] = useState(null);
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: 110px 1.1fr 1fr 1.1fr 1.2fr 0.9fr 96px;
      border-collapse: separate;
      border-spacing: 0;
      min-width: 860px;
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

  return (
    <>
      <OdemeModal
        isOpen={odemeModalOpen}
        onClose={() => setOdemeModalOpen(false)}
        selectedOdeme={selectedOdeme}
      />
      <div className="flex w-full flex-col gap-4 pt-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-950">Ödemeler</h2>
            <p className="text-sm text-slate-500">
              Mağazanıza ait ödemeleri görüntüleyebilir ve yönetebilirsiniz.
            </p>
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
                        ID
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Alınacak Tutar
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Kesinti
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ödenecek Tutar
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Son Ödeme Tarihi
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Durumu
                      </span>
                    </HeaderCellSort>

                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Düzenle
                      </span>
                    </HeaderCellSort>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList?.map((item) => {
                    const kesinti =
                      Number(item?.odenecekTutar || 0) -
                      Number(item?.toplamTutar || 0);
                    return (
                      <Row key={item?.id}>
                        <Cell>
                          <span className="font-semibold text-slate-700">
                            #{item?.id}
                          </span>
                        </Cell>
                        <Cell>{formatCurrency(item?.odenecekTutar)}</Cell>
                        <Cell>{formatCurrency(kesinti)}</Cell>
                        <Cell>{formatCurrency(item?.toplamTutar)}</Cell>
                        <Cell>{formatDate(item?.tarih)}</Cell>
                        <Cell>
                          <span
                            className={
                              statusBadge[item?.status] ||
                              "rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                            }
                          >
                            {item?.status === "beklemede"
                              ? "Bekliyor"
                              : item?.status === "odendi"
                                ? "Ödendi"
                                : "Bilinmiyor"}
                          </span>
                        </Cell>
                        <Cell>
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
                            onClick={() => {
                              setSelectedOdeme(item);
                              setOdemeModalOpen(true);
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

export default OdemelerClient;
