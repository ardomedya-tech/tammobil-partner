import React from "react";
import ErkenOdemeClient from "./ErkenOdemeClient";
import getErkenOdeme from "@/app/actions/Finansal/getErkenOdeme";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
const page = async () => {
  const user = await getCurrentUser();
  const erkenOdeme = await getErkenOdeme(user?.id || 0);
  return <ErkenOdemeClient erkenOdeme={erkenOdeme} />;
};

export default page;
