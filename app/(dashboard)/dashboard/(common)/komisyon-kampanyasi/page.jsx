import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/Products/getProducts";
import KomisyonClient from "./KomisyonClient";
const page = async () => {
  const user = await getCurrentUser();
  const products = await getProducts(user?.id || 0);

  const filteredProducts =
    products?.filter(
      (product) =>
        product?.bayiKomisyonStatus === "aktif" ||
        product?.bayiKomisyonStatus === "onaylandi",
    ) || [];

  return <KomisyonClient products={filteredProducts} />;
};

export default page;
