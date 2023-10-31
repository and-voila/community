import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import { Logo } from '@ui/index';

import { db } from '@/app/lib/db';
import { FreeCounter } from '@/app/ui/free-counter';
import { CourseProgress } from '@/app/ui/learn/courses/course-progress';

import { CourseSidebarItem } from './course-sidebar-item';
import { Chapter, Course, UserProgress } from '.prisma/client';

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
      <div className="p-6 flex items-center">
        <Logo fillOnHover className="h-6 md:h-8" />
        <sup className="text-xs -ml-2 md:-ml-3 text-brand font-mono">beta</sup>
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
