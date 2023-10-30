'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Button } from '@ui/components/ui/button';
import { ExitIcon, ModeToggle } from '@ui/index';

import { isTeacher } from '@/app/lib/teacher';
import { SearchInput } from '@/app/ui/search-input';

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/learn/teacher');
  const isCoursePage = pathname?.includes('/learn/courses');
  const isSearchPage = pathname === '/learn/search';

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="ml-auto flex pr-6">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="outline">
              <ExitIcon className="mr-2 h-4 w-4" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="outline">
              Teacher mode
            </Button>
          </Link>
        ) : null}
      </div>
      <div className="flex gap-x-4 mr-6">
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </>
  );
};
