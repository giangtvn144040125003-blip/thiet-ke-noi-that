import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const connectionString = process.env.DATABASE_URL;

const unavailablePrisma = new Proxy({} as PrismaClient, {
  get() {
    throw new Error("DATABASE_URL is required to initialize Prisma.");
  },
});

export const prisma = connectionString
  ? globalForPrisma.prisma ?? new PrismaClient({ adapter: new PrismaPg({ connectionString }) })
  : unavailablePrisma;

if (connectionString && process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
