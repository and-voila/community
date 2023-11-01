import { redirect } from 'next/navigation';

import { getAnalytics } from '@/app/lib/actions/get-analytics';
import { getCurrentUser } from '@/app/lib/session';
import { isTeacher } from '@/app/lib/teacher';
import { Container } from '@/app/ui/container';
import { TeacherAnalyticsChart } from '@/app/ui/learn/teacher/teacher-analytics-chart';
import { TeacherAnalyticsDataCard } from '@/app/ui/learn/teacher/teacher-analytics-data-card';

const AnalyticsPage = async () => {
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  const { data, totalRevenue, totalSales } = await getAnalytics();

  return (
    <Container>
      <div className="p-6">
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <TeacherAnalyticsDataCard
            label="Total Revenue"
            value={totalRevenue}
            shouldFormat
          />
          <TeacherAnalyticsDataCard label="Total Sales" value={totalSales} />
        </div>
        <TeacherAnalyticsChart data={data} />
      </div>
    </Container>
  );
};

export default AnalyticsPage;
