import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { Container } from '@/components/container';
import { db } from '@/lib/db';

import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
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
