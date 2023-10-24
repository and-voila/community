import { Attachment, Chapter } from '@prisma/client';

import { db } from '@/lib/db';
import { checkSubscription } from '@/lib/subscription';

interface GetChapterProps {
  userId: string;
  courseId: string;
  chapterId: string;
}

export const getChapter = async ({
  userId,
  courseId,
  chapterId,
}: GetChapterProps) => {
  try {
    const isPaidMember = await checkSubscription();

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    const course = await db.course.findUnique({
      where: {
        isPublished: true,
        id: courseId,
      },
      select: {
        isFree: true,
        price: true,
        description: true,
      },
      cacheStrategy: {
        ttl: 30,
        swr: 60,
      },
    });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
      cacheStrategy: {
        ttl: 30,
        swr: 60,
      },
    });

    if (!chapter || !course) {
      throw new Error('Chapter or course not found');
    }

    let muxData = null;
    let attachments: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    if (course.isFree || isPaidMember || purchase) {
      attachments = await db.attachment.findMany({
        where: {
          courseId: courseId,
        },
        cacheStrategy: {
          ttl: 30,
          swr: 60,
        },
      });
    }

    if (course.isFree || isPaidMember || purchase) {
      muxData = await db.muxData.findUnique({
        where: {
          chapterId: chapterId,
        },
        cacheStrategy: {
          ttl: 30,
          swr: 60,
        },
      });

      nextChapter = await db.chapter.findFirst({
        where: {
          courseId: courseId,
          isPublished: true,
          position: {
            gt: chapter?.position,
          },
        },
        orderBy: {
          position: 'asc',
        },
        cacheStrategy: {
          ttl: 30,
          swr: 60,
        },
      });
    }

    const userProgress = await db.userProgress.findUnique({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
    });

    return {
      chapter,
      course,
      muxData,
      attachments,
      nextChapter,
      userProgress,
      purchase,
    };
  } catch (error) {
    return {
      chapter: null,
      course: null,
      muxData: null,
      attachments: [],
      nextChapter: null,
      userProgress: null,
      purchase: null,
    };
  }
};
