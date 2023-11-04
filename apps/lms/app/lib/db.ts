import { withAccelerate } from '@prisma/extension-accelerate';

import { env } from '@/env.mjs';

import { PrismaClient } from '.prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate());
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export const db = prisma;

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
