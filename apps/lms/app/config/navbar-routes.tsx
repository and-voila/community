'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Button } from '@ui/components/ui/button';
import { ExitIcon, ModeToggle } from '@ui/index';

import { isTeacher } from '@/app/lib/teacher';
import { SearchInput } from '@/app/ui/search-input';

import { Icons } from '../ui/icons';

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
          <Link href="/learn">
            <Button size="sm" variant="outline">
              <ExitIcon className="mr-2 h-4 w-4" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/learn/teacher/courses">
            <Button size="sm" variant="outline">
              Teacher mode
            </Button>
          </Link>
        ) : null}
      </div>
      <div className="flex gap-x-4 mr-6 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
        <Link
          href="https://discord.com/channels/1151749282806910976/1164902538731069542"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Navigate to And Voila Discord in a new window."
        >
          <Icons.discord className="text-brand h-9 w-9" />
        </Link>
      </div>
    </>
  );
};
