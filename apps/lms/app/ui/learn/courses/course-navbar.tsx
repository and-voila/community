import { NavbarRoutes } from '@/app/config/navbar-routes';
import { getCurrentUser } from '@/app/lib/session';

import { UserAccountNav } from '../../user-account-nav';
import { CourseMobileSidebar } from './course-mobile-sidebar';
import { Chapter, Course, UserProgress } from '.prisma/client';

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const CourseNavbar = async ({
  course,
  progressCount,
  isPaidMember,
  apiLimitCount,
}: CourseNavbarProps) => {
  const user = await getCurrentUser();
  const userId = user?.id;
  return (
    <div className="flex h-full items-center border-b bg-[#dcdfe5] p-4 shadow-sm dark:bg-[#16161a]">
      <CourseMobileSidebar
        course={course}
        progressCount={progressCount}
        isPaidMember={isPaidMember}
        apiLimitCount={apiLimitCount}
      />
      <NavbarRoutes userId={userId} />
      <UserAccountNav
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
      />
    </div>
  );
};
