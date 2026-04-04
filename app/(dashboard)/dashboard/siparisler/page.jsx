import React from "react";
import OrdersClient from "./OrdersClient";
import getOrders from "../../../actions/Order/getOrders";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
const page = async () => {
  const user = await getCurrentUser();
  const orders = await getOrders(user?.id || 0);
  return <OrdersClient orders={orders} />;
};

export default page;
