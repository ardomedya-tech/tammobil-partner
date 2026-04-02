import getProductOne from "@/app/actions/Products/getProductOne";
import React from "react";
import ProductClient from "./ProductClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getAllCategory from "@/app/actions/Category/getAllCategory";
import getAllProducts from "@/app/actions/Products/getAllProducts";
const page = async ({ params }) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const product = await getProductOne(id);
  const allcategory = await getAllCategory();
  const allproducts = await getAllProducts();
  return (
    <ProductClient
      product={product}
      user={user}
      allcategory={allcategory}
      allproducts={allproducts}
    />
  );
};

export default page;
