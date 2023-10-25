import { Chapter, Course, UserProgress } from '@prisma/client';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/ui/sheet';
import { HamburgerMenuIcon } from '@ui/index';

import { CourseSidebar } from './course-sidebar';

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
        <HamburgerMenuIcon />
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
