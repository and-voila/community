import { redirect } from 'next/navigation';
import { getCourses } from '@/actions/get-courses';
import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { checkSubscription } from '@/lib/subscription';
import { CoursesList } from '@/components/courses-list';
import { SearchInput } from '@/components/search-input';

import { Categories } from './_components/categories';

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
