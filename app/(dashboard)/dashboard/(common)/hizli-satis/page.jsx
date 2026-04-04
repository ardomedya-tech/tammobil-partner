import React from "react";
import getBayiProducts from "@/app/actions/HizliSatis/getBayiProducts";
import HizliSatisClient from "./HizliSatisClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
const page = async () => {
  const user = await getCurrentUser();
  const bayiproducts = await getBayiProducts();

  return <HizliSatisClient bayiproducts={bayiproducts} user={user} />;
};

export default page;
