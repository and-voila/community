import { getProgress } from '@/actions/get-progress';
import { Category, Chapter, Course } from '@prisma/client';

import { db } from '@/lib/db';

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

export const getDashboardCourses = async (
  userId: string,
): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });

    const purchasedCourseIds = purchasedCourses.map(
      (purchase) => purchase.course.id,
    );

    const userProgress = await db.userProgress.findMany({
      where: { userId },
      select: { chapterId: true },
    });

    const courseIdsWithProgress = userProgress.map(
      (progress) => progress.chapterId,
    );

    const allCourseIds = Array.from(
      new Set([...purchasedCourseIds, ...courseIdsWithProgress]),
    );

    const courses = await Promise.all(
      allCourseIds.map(async (id) => {
        const course = await db.course.findUnique({
          where: { id },
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        });
        const progress = await getProgress(userId, id);
        return { ...course, progress } as CourseWithProgressWithCategory;
      }),
    );

    const completedCourses = courses.filter(
      (course) => course.progress === 100,
    );
    const coursesInProgress = courses.filter(
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
