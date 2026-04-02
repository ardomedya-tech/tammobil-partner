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
import { FaArrowRight } from "react-icons/fa";
import delProduct from "@/app/actions/Products/delProduct";
import updateSpecProducts from "@/app/actions/Products/updateSpecProducts";
import AdminSwitch from "../components/AdminSwitch";

const ProductsClient = (props) => {
  const pdata = props.products || [];
  const [productData, setProductData] = useState(pdata);
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [sendData, setSendData] = useState([]);

  const filteredData =
    search === ""
      ? productData
      : productData?.filter(
          (data) =>
            data?.id?.toString().includes(search?.toLowerCase()) ||
            data?.name?.toLowerCase().includes(search?.toLowerCase()),
        );
  const data = { nodes: filteredData };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme({
    ...materialTheme,
    Table: `
      --data-table-library_grid-template-columns: 1.5fr 1.2fr 110px 120px 130px 110px;
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

  const productDelete = async (item) => {
    Swal.fire({
      title: item.name + " Adlı Ürün Silinecek!! ",
      showDenyButton: true,
      confirmButtonText: "Sil",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await delProduct(item?.id);
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

  const changeActiveStatus = (id) => {
    setProductData((prevProductData) => {
      // Product data üzerinde map işlemi yaparak güncelleme veya ekleme yapılacak
      let upindex = null;
      const updatedProductData = prevProductData.map((item, index) => {
        if (item.id === id) {
          upindex = index;
          // Eğer id eşleşirse, aktif durumu güncellenir
          return { ...item, isActive: !item.isActive };
        } else {
          return item;
        }
      });

      const updatedItem = updatedProductData[upindex];

      setSendData((prevSendData) => {
        const index = prevSendData.findIndex((item) => item.id === id);

        if (index !== -1) {
          // Eğer id eşleşen bir öğe varsa, sendData dizisinde güncelle
          const updatedSendData = [...prevSendData];

          updatedSendData[index] = updatedItem;
          return updatedSendData;
        } else {
          // Eğer eşleşen bir öğe yoksa, sendData dizisine yeni öğe ekle
          return [...prevSendData, updatedItem];
        }
      });

      return updatedProductData;
    });
  };
  const productSave = async () => {
    if (sendData?.length === 0)
      await Swal.fire({
        icon: "error",
        title: "Bir Yeri Değiştirin",
        showConfirmButton: false,
        timer: 1500,
      });
    else {
      const filterdata = sendData.filter((item) => item !== undefined);

      const res = await updateSpecProducts(filterdata);
      if (res === true) {
        await Swal.fire({
          icon: "success",
          title: "Başarıyla Kaydedildi",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: res.message,
        });
      }
      router.refresh();
    }
  };
  return (
    <>
      <div className="flex w-full flex-col gap-4 pt-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                Ürün Listesi
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Ürünleri arayabilir, düzenleyebilir ve yeni ürün
                ekleyebilirsiniz.
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
              <button
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                type="button"
                onClick={productSave}
              >
                Tabloyu Kaydet
              </button>
              <Link href={"/dashboard/urunler/add"}>
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
                  type="button"
                >
                  Ürün Ekle <FaArrowRight size={12} />
                </button>
              </Link>
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
                        Fiyat / İndirimli
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Satış
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Tıklanma
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Satışa Açık
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
                            {item?.sells || 0}
                          </span>
                        </Cell>
                        <Cell>
                          <span className="font-medium text-slate-700">
                            {item?.onclick || 0}
                          </span>
                        </Cell>
                        <Cell>
                          <AdminSwitch
                            value={item?.isActive}
                            handleCheckChange={() =>
                              changeActiveStatus(item?.id)
                            }
                          />
                        </Cell>
                        <Cell>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
                              onClick={() => {
                                router.push(`/dashboard/urunler/${item?.id}`);
                              }}
                            >
                              <FaRegEdit size={16} />
                            </button>
                            <button
                              type="button"
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100"
                              onClick={() => productDelete(item)}
                            >
                              <FaRegTrashAlt size={16} />
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

export default ProductsClient;
