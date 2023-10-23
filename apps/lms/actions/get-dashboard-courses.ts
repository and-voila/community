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
    const courses = (await db.course.findMany({
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
        },
      },
      cacheStrategy: {
        ttl: 300,
        swr: 60,
      },
    })) as CourseWithProgressWithCategory[];

    for (const course of courses) {
      const progress = await getProgress(userId, course.id);
      course['progress'] = progress;
    }

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
