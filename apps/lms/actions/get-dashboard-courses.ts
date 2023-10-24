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
  const isPaidMember = await checkSubscription();
  try {
    const allCourses = await db.course.findMany({
      where: {
        OR: [
          { isFree: true },
          {
            purchases: {
              some: {
                userId: userId,
              },
            },
          },
          isPaidMember ? {} : { NOT: { isFree: false } },
        ],
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
        },
      },
    });

    const courses = allCourses.map(
      (course) => course,
    ) as CourseWithProgressWithCategory[];

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
