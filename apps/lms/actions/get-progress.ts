import { db } from '@/lib/db';

export const getProgress = async (
  userId: string,
  chapterId: string,
): Promise<number> => {
  try {
    const userProgress = await db.userProgress.findFirst({
      where: {
        userId: userId,
        chapterId: chapterId,
      },
      cacheStrategy: {
        ttl: 300,
        swr: 60,
      },
    });

    if (!userProgress) {
      return 0;
    }

    if (userProgress.isCompleted) {
      return 100;
    }

    return 10;
  } catch (error) {
    return 0;
  }
};
