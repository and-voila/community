import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { getDashboardCourses } from '@/app/lib/actions/get-dashboard-courses';
import { Icons } from '@/app/ui/icons';
import { CoursesList } from '@/app/ui/learn/courses/courses-list';
import { InfoCard } from '@/app/ui/learn/dashboard/info-card';

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const { completedCourses, coursesInProgress } =
    await getDashboardCourses(userId);

  return (
    <div className="space-y-8 p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
        <InfoCard
          icon={Icons.clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={Icons.circleChecked}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="default"
        />
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}