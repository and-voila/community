import { redirect } from 'next/navigation';

import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getCourses } from '@/app/lib/actions/get-courses';
import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { CoursesList } from '@/app/ui/learn/courses/courses-list';
import { Categories } from '@/app/ui/learn/dashboard/categories';
import { SearchInput } from '@/app/ui/search-input';

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!userId) {
    return redirect('/');
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  const isPaidMember = await checkSubscription();

  const courses = await getCourses({
    userId,
    ...searchParams,
    isPaidMember,
  });

  return (
    <>
      <div className="block px-6 pt-6 md:mb-0 md:hidden lg:px-8">
        <SearchInput />
      </div>
      <div className="space-y-8 p-6 lg:p-8">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
