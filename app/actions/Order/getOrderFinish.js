"use server";
import { prisma } from "@/lib/prismadb";

export default async function getOrderFinish() {
  try {
    const cont = await prisma.SiparisOrder.findMany({
      where: {
        NOT: {
          status: "PENDING",
        },
      },
    });

    return cont;
  } catch (error) {
    throw new Error(error);
  }
}
