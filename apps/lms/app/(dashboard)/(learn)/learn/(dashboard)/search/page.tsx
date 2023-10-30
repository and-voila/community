import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getCourses } from '@/app/lib/actions/get-courses';
import { db } from '@/app/lib/db';
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
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
    cacheStrategy: {
      ttl: 600,
      swr: 1200,
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
