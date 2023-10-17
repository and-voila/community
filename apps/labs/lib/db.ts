/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient().$extends(withAccelerate()) as any;
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient().$extends(withAccelerate()) as any;
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
