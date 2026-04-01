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
import delProduct from "@/app/actions/Products/delProduct";
import KargoBarkoduModal from "./KargoBarkoduModal";
const OrdersClient = (props) => {
  const pdata = props.orders || [];
  const [orderData, setOrderData] = useState(pdata);
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [kargoBarkoduModalOpen, setKargoBarkoduModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const filteredData =
    search === ""
      ? orderData
      : orderData?.filter(
          (data) =>
            data?.id?.toString().includes(search?.toLowerCase()) ||
            data?.name?.toLowerCase().includes(search?.toLowerCase()),
        );
  const data = { nodes: filteredData };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: repeat(6, 1fr);
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
        STOCK: (array) => array.sort((a, b) => b.stock - a.stock),
        SELLS: (array) => array.sort((a, b) => b.sells - a.sells),
        CLICK: (array) => array.sort((a, b) => b.onclick - a.onclick),
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

  const orderDelete = async (item) => {
    Swal.fire({
      title: item.name + " Adlı Ürün Silinecek!! ",
      showDenyButton: true,
      confirmButtonText: "Sil",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const res = await delProduct(item?.id);
        const res = true;
        if (res === true) {
          await Swal.fire({
            icon: "success",
            title: "Başarıyla Silindi",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: res.message,
          });
        }
      }
    });
  };

  return (
    <>
      <KargoBarkoduModal
        open={kargoBarkoduModalOpen}
        onClose={() => setKargoBarkoduModalOpen(false)}
        selectedOrder={selectedOrder}
      />
      <div className="flex flex-col w-full pt-4">
        <div className="w-full mt-2">
          <input
            type="text"
            placeholder="Ara"
            className="w-full h-12 bg-slate-200 px-4"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex w-full overflow-x-scroll">
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
                      <span className="text-sm text-gray-600">Siparis No</span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-sm text-gray-600">IMEI</span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-sm text-gray-600 ">Ürün Adı</span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-sm text-gray-600 ">
                        Satış Miktarı
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-sm text-gray-600 text-center">
                        Aksiyonlar
                      </span>
                    </HeaderCellSort>

                    <HeaderCellSort>
                      <span className="text-sm text-gray-600 text-center">
                        Düzenle/Sil
                      </span>
                    </HeaderCellSort>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList?.map((item) => {
                    return (
                      <Row key={item?.id}>
                        <Cell
                          className="hover:bg-slate-100 cursor-pointer"
                          onClick={() =>
                            router.push(`/dashboard/siparisler/${item?.id}`)
                          }
                        >
                          <Link
                            href={`/dashboard/siparisler/${item.id}`}
                            className="text-nowrap md:text-wrap text-blue-500"
                          >
                            #{item?.id}
                          </Link>
                        </Cell>
                        <Cell>{item?.Product?.imei}</Cell>
                        <Cell>{item?.Product?.name}</Cell>
                        <Cell>
                          {item?.Product?.indirim === true
                            ? item.Product?.inprice
                            : item.Product?.price}{" "}
                          ₺
                        </Cell>
                        <Cell>
                          <div className="flex items-center gap-2">
                            <button
                              className="text-xs cursor-pointer font-semibold px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                              onClick={() => {
                                setKargoBarkoduModalOpen(true);
                                setSelectedOrder(item);
                              }}
                            >
                              Kargo Barkodu
                            </button>
                            <button className="text-xs cursor-pointer font-semibold px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors">
                              Fatura Yükle
                            </button>
                          </div>
                        </Cell>

                        <Cell>
                          <button
                            onClick={() => {
                              router.push(`/dashboard/siparisler/${item?.id}`);
                            }}
                          >
                            <FaRegEdit size={26} color="green" />
                          </button>

                          <button onClick={() => orderDelete(item)}>
                            <FaRegTrashAlt size={26} color="red" />
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
        <div className="mt-4">
          <div className="flex items-center justify-between gap-4 mb-12">
            <span className="font-bold">Toplam Sayfa: {totalPage}</span>
            <div className="flex items-center justify-center gap-2 mr-12">
              <span className="font-bold">
                Sayfa : {pagination?.state?.page + 1}
              </span>

              <button
                type="button"
                className="theme-btn-one p-1 text-xl bg-stone-200 "
                disabled={pagination?.state?.page === 0}
                onClick={() => pagination.fns.onSetPage(0)}
              >
                {"|<"}
              </button>
              <button
                type="button"
                className="theme-btn-one p-1 text-xl bg-stone-200 "
                disabled={pagination?.state?.page === 0}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page - 1)
                }
              >
                {"<"}
              </button>
              <button
                type="button"
                className="theme-btn-one p-1 text-xl bg-stone-200 "
                disabled={pagination?.state?.page + 1 === totalPage}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page + 1)
                }
              >
                {">"}
              </button>
              <button
                type="button"
                className="theme-btn-one p-1 text-xl bg-stone-200 "
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
