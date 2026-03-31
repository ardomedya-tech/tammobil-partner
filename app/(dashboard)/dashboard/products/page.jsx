import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/Products/getProducts";
import ProductsClient from "./ProductsClient";
const page = async () => {
  const user = await getCurrentUser();
  const products = await getProducts(user?.id);

  return <ProductsClient products={products} />;
};

export default page;
