import getProductOne from "@/app/actions/Products/getProductOne";
import React from "react";
import ProductClient from "./ProductClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getAllCategory from "@/app/actions/Category/getAllCategory";

const page = async ({ params }) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const product = await getProductOne(id);
  const allcategory = await getAllCategory();
  return (
    <ProductClient product={product} user={user} allcategory={allcategory} />
  );
};

export default page;
