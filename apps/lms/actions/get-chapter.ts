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
    const hasSubscription = await checkSubscription();

    const course = await db.course.findUnique({
      where: {
        isPublished: true,
        id: courseId,
      },
      select: {
        isFree: true,
      },
      cacheStrategy: {
        ttl: 604800,
        swr: 3600,
      },
    });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
      cacheStrategy: {
        ttl: 604800,
        swr: 3600,
      },
    });

    if (!chapter || !course) {
      throw new Error('Chapter or course not found');
    }

    let muxData = null;
    let attachments: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    if (hasSubscription) {
      attachments = await db.attachment.findMany({
        where: {
          courseId: courseId,
        },
        cacheStrategy: {
          ttl: 604800,
          swr: 3600,
        },
      });
    }

    if (chapter.isFree || hasSubscription) {
      muxData = await db.muxData.findUnique({
        where: {
          chapterId: chapterId,
        },
        cacheStrategy: {
          ttl: 604800,
          swr: 3600,
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
          ttl: 604800,
          swr: 3600,
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
        ttl: 604800,
        swr: 10,
      },
    });

    return {
      chapter,
      course,
      muxData,
      attachments,
      nextChapter,
      userProgress,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('[GET_CHAPTER]', error);
    return {
      chapter: null,
      course: null,
      muxData: null,
      attachments: [],
      nextChapter: null,
      userProgress: null,
    };
  }
};
