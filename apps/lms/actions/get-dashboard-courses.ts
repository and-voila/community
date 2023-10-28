import { getProgress } from '@/actions/get-progress';
import { Category, Chapter, Course } from '@prisma/client';

import { db } from '@/lib/db';

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
  isPaidMember: boolean;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

export const getDashboardCourses = async (
  userId: string,
): Promise<DashboardCourses> => {
  try {
    const userProgress = await db.userProgress.findMany({
      where: { userId },
      select: { chapterId: true, isCompleted: true, isStarted: true },
    });

    const chapterIdsWithProgress = userProgress.map(
      (progress) => progress.chapterId,
    );

    const courses = await db.course.findMany({
      where: {
        chapters: {
          some: {
            id: {
              in: chapterIdsWithProgress,
            },
          },
        },
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
        },
      },
      cacheStrategy: {
        ttl: 3,
        swr: 6,
      },
    });

    const coursesWithProgress = await Promise.all(
      courses.map(async (course) => {
        const progress = await getProgress(userId, course.id);
        return {
          ...course,
          progress,
        } as CourseWithProgressWithCategory;
      }),
    );

    const completedCourses = coursesWithProgress.filter(
      (course) => course.progress === 100,
    );
    const coursesInProgress = coursesWithProgress.filter(
      (course) => (course.progress ?? 0) < 100,
    );

    return {
      completedCourses,
      coursesInProgress,
    };
  } catch (error) {
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
};
