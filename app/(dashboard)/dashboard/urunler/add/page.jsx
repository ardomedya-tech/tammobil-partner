import React from "react";
import ProductAddClient from "./ProductAddClient";
import getAllCategory from "@/app/actions/Category/getAllCategory";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getAllProducts from "@/app/actions/Products/getAllProducts";
export const dynamic = "force-dynamic";
const page = async () => {
  const user = await getCurrentUser();
  const allcategory = await getAllCategory();
  const allproducts = await getAllProducts();
  return (
    <ProductAddClient
      allcategory={allcategory}
      allproducts={allproducts}
      user={user}
    />
  );
};

export default page;
