import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient | undefined;

if (!prisma) {
  throw new Error("Prisma client not initialized");
}

export default prisma;
