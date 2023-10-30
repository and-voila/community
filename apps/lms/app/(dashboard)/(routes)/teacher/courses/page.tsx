import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { db } from '@/app/lib/db';
import { isTeacher } from '@/app/lib/teacher';
import { Container } from '@/app/ui/container';
import { teacherCourseListColumns } from '@/app/ui/learn/teacher/teacher-course-list-columns';
import { TeacherCourseListDataTable } from '@/app/ui/learn/teacher/teacher-course-list-data-table';

const CoursesPage = async () => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  const courses = await db.course.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <Container className="py-12">
      <TeacherCourseListDataTable
        columns={teacherCourseListColumns}
        data={courses}
      />
    </Container>
  );
};

export default CoursesPage;
