import { getProgress } from '@/actions/get-progress';
import { Category, Chapter, Course } from '@prisma/client';

import { db } from '@/lib/db';
import { checkSubscription } from '@/lib/subscription';

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
    const hasSubscription = await checkSubscription();

    const courses = (await db.course.findMany({
      where: {
        isFree: !hasSubscription,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
        },
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
    // eslint-disable-next-line no-console
    console.log('[GET_DASHBOARD_COURSES]', error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
};
