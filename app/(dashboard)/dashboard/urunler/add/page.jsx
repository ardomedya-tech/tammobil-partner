import React from "react";
import ProductAddClient from "./ProductAddClient";
import getAllCategory from "@/app/actions/Category/getAllCategory";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
export const dynamic = "force-dynamic";
const page = async () => {
  const user = await getCurrentUser();
  const allcategory = await getAllCategory();
  return <ProductAddClient allcategory={allcategory} user={user} />;
};

export default page;
