import { PrismaClient } from "@/lib/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const client = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = client;
}

export const prisma = client;