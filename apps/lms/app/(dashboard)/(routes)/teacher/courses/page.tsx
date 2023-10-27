import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { isTeacher } from '@/lib/teacher';
import { Container } from '@/components/container';

import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

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
      <DataTable columns={columns} data={courses} />
    </Container>
  );
};

export default CoursesPage;
