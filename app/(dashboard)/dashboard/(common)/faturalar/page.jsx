import React from "react";
import getFaturalar from "@/app/actions/Finansal/getFaturalar";
import FaturalarClient from "./FaturalarClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
const page = async () => {
  const user = await getCurrentUser();
  const faturalar = await getFaturalar(user?.id || 0);
  return <FaturalarClient faturalar={faturalar} />;
};

export default page;
