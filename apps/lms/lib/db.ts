import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = (globalThis.prisma ||
  new PrismaClient().$extends(withAccelerate())) as PrismaClient;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
