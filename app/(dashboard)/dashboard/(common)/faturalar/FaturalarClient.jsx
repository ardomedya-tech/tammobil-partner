"use client";
import { useEffect, useMemo, useState } from "react";
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

const renderFaturaLink = (url, label) => {
  if (!url) {
    return (
      <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-400">
        -
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
    >
      {label}
    </a>
  );
};

const toBoundaryDate = (value, endOfDay = false) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  } else {
    date.setHours(0, 0, 0, 0);
  }

  return date;
};

const FaturalarClient = ({ faturalar }) => {
  const pdata = faturalar || [];
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredNodes = useMemo(() => {
    const start = toBoundaryDate(startDate, false);
    const end = toBoundaryDate(endDate, true);

    if (!start && !end) return pdata;

    return pdata.filter((item) => {
      const itemDate = new Date(item?.tarih);
      if (Number.isNaN(itemDate.getTime())) return false;
      if (start && itemDate < start) return false;
      if (end && itemDate > end) return false;
      return true;
    });
  }, [endDate, pdata, startDate]);

  const data = { nodes: filteredNodes };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: 110px 1.1fr 1fr 1.1fr 1.2fr 0.9fr;
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

  useEffect(() => {
    pagination?.fns?.onSetPage(0);
  }, [startDate, endDate]);

  const totalPage = pagination?.state?.getTotalPages(data.nodes);
  const currentPage = totalPage === 0 ? 0 : pagination?.state?.page + 1;

  return (
    <>
      <div className="flex w-full flex-col gap-4 pt-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-950">Faturalar</h2>
            <p className="text-sm text-slate-500">
              Mağazanıza ait faturaları görüntüleyebilir ve yönetebilirsiniz.
            </p>
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Başlangıç Tarihi
                </span>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Bitiş Tarihi
                </span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || undefined}
                  className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-400"
                />
              </label>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                {filteredNodes.length} kayıt
              </span>
              <button
                type="button"
                className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                }}
                disabled={!startDate && !endDate}
              >
                Temizle
              </button>
            </div>
          </div>

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
                        Komisyon Faturası
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Kargo Faturası
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Platform Gideri Faturası
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Ceza Faturası
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Tarih
                      </span>
                    </HeaderCellSort>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList?.map((item) => {
                    return (
                      <Row key={item?.id}>
                        <Cell>
                          <span className="font-semibold text-slate-700">
                            #{item?.id}
                          </span>
                        </Cell>
                        <Cell>
                          {renderFaturaLink(
                            item.komisyonFaturaUrl,
                            "Komisyon Faturası",
                          )}
                        </Cell>
                        <Cell>
                          {renderFaturaLink(
                            item.kargoFaturaUrl,
                            "Kargo Faturası",
                          )}
                        </Cell>

                        <Cell>
                          {renderFaturaLink(
                            item.platformFaturaUrl,
                            "Platform Gideri Faturası",
                          )}
                        </Cell>
                        <Cell>
                          {renderFaturaLink(
                            item.cezaFaturaUrl,
                            "Ceza Faturası",
                          )}
                        </Cell>
                        <Cell>
                          <span>{formatDate(item?.tarih)}</span>
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
                Sayfa: {currentPage}
              </span>

              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page === 0 || totalPage === 0}
                onClick={() => pagination.fns.onSetPage(0)}
              >
                {"|<"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={pagination?.state?.page === 0 || totalPage === 0}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page - 1)
                }
              >
                {"<"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={
                  pagination?.state?.page + 1 >= totalPage || totalPage === 0
                }
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page + 1)
                }
              >
                {">"}
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={
                  pagination?.state?.page + 1 >= totalPage || totalPage === 0
                }
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

export default FaturalarClient;
