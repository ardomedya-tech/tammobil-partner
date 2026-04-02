import { getCurrentUser } from "@/app/actions/getCurrentUser";
import React from "react";
import getOdemeler from "@/app/actions/Finansal/getOdemeler";
import OdemelerClient from "./OdemelerClient";
const page = async () => {
  const user = await getCurrentUser();
  const odemeler = await getOdemeler(user?.id || 0);
  return <OdemelerClient odemeler={odemeler} />;
};

export default page;
