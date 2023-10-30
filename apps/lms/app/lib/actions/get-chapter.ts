import { Attachment, Chapter } from '@prisma/client';

import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { db } from '@/app/lib/db';

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
      cacheStrategy: {
        ttl: 300,
        swr: 600,
      },
    });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
      cacheStrategy: {
        ttl: 300,
        swr: 600,
      },
    });

    if (!chapter || !course) {
      throw new Error('Chapter or course not found');
    }

    const isPaidMember = await checkSubscription();

    let muxData = null;
    let attachments: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    if (course.price === 0 || purchase || isPaidMember) {
      attachments = await db.attachment.findMany({
        where: {
          courseId: courseId,
        },
        cacheStrategy: {
          ttl: 900,
          swr: 1800,
        },
      });
    }

    if (course.price === 0 || purchase || isPaidMember) {
      muxData = await db.muxData.findUnique({
        where: {
          chapterId: chapterId,
        },
        cacheStrategy: {
          ttl: 900,
          swr: 1800,
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
          ttl: 900,
          swr: 1800,
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
      cacheStrategy: {
        ttl: 3,
        swr: 6,
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
      isPaidMember,
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
      isPaidMember: false,
    };
  }
};
