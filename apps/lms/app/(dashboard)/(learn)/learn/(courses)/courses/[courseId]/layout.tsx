import { redirect } from 'next/navigation';

import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getProgress } from '@/app/lib/actions/get-progress';
import { getApiLimitCount } from '@/app/lib/api-limit';
import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { CourseNavbar } from '@/app/ui/learn/courses/course-navbar';
import { CourseSidebar } from '@/app/ui/learn/courses/course-sidebar';

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPaidMember = await checkSubscription();
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!userId) {
    return redirect('/');
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: 'asc',
        },
      },
    },
    cacheStrategy: {
      ttl: 15,
      swr: 30,
    },
  });

  if (!course) {
    return redirect('/');
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full bg-background dark:bg-[#242629]">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-80">
        <CourseNavbar
          course={course}
          progressCount={progressCount}
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-80 flex-col md:flex">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </div>
      <main className="h-full pt-[80px] md:pl-80">{children}</main>
    </div>
  );
};

export default CourseLayout;
