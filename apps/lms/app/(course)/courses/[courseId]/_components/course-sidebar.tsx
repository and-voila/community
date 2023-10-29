import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import { Chapter, Course, UserProgress } from '@prisma/client';
import { Logo } from '@ui/index';

import { db } from '@/lib/db';
import { CourseProgress } from '@/components/course-progress';
import { FreeCounter } from '@/components/free-counter';

import { CourseSidebarItem } from './course-sidebar-item';

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const CourseSidebar = async ({
  course,
  progressCount,
  apiLimitCount,
  isPaidMember = false,
}: CourseSidebarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  const isComplete = progressCount === 100;

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="mb-4 p-8">
        <Logo fillOnHover className="h-6 md:h-8" />
      </div>
      <div className="flex flex-col border-y p-8 bg-primary-foreground">
        <p className="text-xs text-muted-foreground mb-2 font-mono">Playbook</p>
        <h1 className="font-semibold text-lg">{course.title}</h1>
        {(isPaidMember || purchase || course.price === 0) && (
          <div className="mt-10">
            <CourseProgress
              variant={isComplete ? 'success' : 'default'}
              value={progressCount}
            />
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full flex-col">
        <p className="text-xs text-muted-foreground mb-2 px-8 font-mono">
          Topic
        </p>
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={course.price !== 0 && !(isPaidMember || purchase)}
          />
        ))}
        <div className="absolute bottom-6">
          <FreeCounter
            isPaidMember={isPaidMember}
            apiLimitCount={apiLimitCount}
          />
        </div>
      </div>
    </div>
  );
};
