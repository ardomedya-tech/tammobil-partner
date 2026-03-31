import React from "react";
import getOrderOne from "@/app/actions/Order/getOrderOne";
import OrderClient from "./OrderClient";
const page = async ({ params }) => {
  const { id } = await params;
  const order = await getOrderOne(id);

  return <OrderClient order={order} />;
};

export default page;
