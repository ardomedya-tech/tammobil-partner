import React from "react";
import OrdersClient from "./OrdersClient";
import getOrders from "../../../actions/Order/getOrders";

const page = async () => {
  const orders = await getOrders();
  return <OrdersClient orders={orders} />;
};

export default page;
