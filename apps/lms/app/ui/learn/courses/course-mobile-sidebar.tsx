import { Sheet, SheetContent, SheetTrigger } from '@ui/components/ui/sheet';

import { Icons } from '@/app/ui/icons';

import { CourseSidebar } from './course-sidebar';
import { Chapter, Course, UserProgress } from '.prisma/client';

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  isPaidMember: boolean;
  apiLimitCount: number;
}

export const CourseMobileSidebar = ({
  course,
  progressCount,
  isPaidMember,
  apiLimitCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Icons.hamburgerMenu />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-white p-0">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </SheetContent>
    </Sheet>
  );
};
