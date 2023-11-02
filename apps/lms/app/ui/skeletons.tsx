import { cn, Skeleton } from '@ui/index';

import { Icons } from './icons';

// Sidebar Skeletons

export const SidebarItemSkeleton = () => {
  return (
    <div className={cn('flex items-center gap-x-2 pl-6 py-4')}>
      <Skeleton className="h-5 w-5 rounded-full" />
      <Skeleton className="w-24 h-4" />
    </div>
  );
};

export const SidebarRoutesSkeleton = () => {
  return (
    <div className="mt-6 flex w-full flex-col">
      <SidebarItemSkeleton />
      <SidebarItemSkeleton />
      <SidebarItemSkeleton />
      <SidebarItemSkeleton />
      <SidebarItemSkeleton />
    </div>
  );
};

export const LogoSkeleton = () => {
  return (
    <div className={cn('flex items-center')}>
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="ml-2 h-8 w-32" />
    </div>
  );
};

export const FreeCounterSkeleton = () => {
  return (
    <div className="px-2">
      <div className={cn('border rounded-md bg-primary-foreground p-4')}>
        <Skeleton className="w-2/3 h-5 my-2 mx-auto" />
        <Skeleton className="w-4/5 h-4 my-2 mx-auto" />
        <Skeleton className="w-4/5 h-4 my-2 mx-auto" />
        {/* Placeholder for API_LIMIT_COUNT progress bar */}
        {/* <Skeleton className="w-full h-3 my-2" />  Progress bar */}
        <Skeleton className="w-full h-8 my-2" />
      </div>
    </div>
  );
};

// Navbar Skeletons

export const SearchInputSkeleton = () => {
  return (
    <div className="relative flex items-center pl-4">
      <Skeleton className="absolute left-6 h-4 w-4 rounded-full" />{' '}
      <Skeleton className="w-full h-6 rounded-lg" />
    </div>
  );
};

export const ExitButtonSkeleton = () => {
  return (
    <div className="ml-auto flex pr-6">
      <Skeleton className="h-6 w-24 rounded-md" />
    </div>
  );
};

export const ModeToggleSkeleton = () => {
  return (
    <div className="relative">
      <Skeleton className="rounded-md h-6 w-6" />
    </div>
  );
};

export const CommunityIconSkeleton = () => {
  return <Skeleton className="rounded-full h-9 w-9" />;
};

export const UserAvatarSkeleton = () => {
  return <Skeleton className="rounded-full h-8 w-8" />;
};

export const UserAccountNavSkeleton = () => {
  return (
    <div className="relative inline-block">
      <Skeleton className="rounded-full h-8 w-8" />
      <div className="absolute top-full mt-2 right-0 w-48 rounded-md shadow-lg">
        <div className="bg-white dark:bg-gray-800 p-2 rounded-md">
          <Skeleton className="block h-4 w-24 my-1" />
          <Skeleton className="block h-3 w-32 my-1" />
          <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
          <Skeleton className="block h-4 w-24 my-1" />
          <Skeleton className="block h-4 w-24 my-1" />
          <Skeleton className="block h-4 w-24 my-1" />
          <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
          <Skeleton className="block h-4 w-24 my-1" />
        </div>
      </div>
    </div>
  );
};

// Playbook Skeletons

interface CourseCardSkeletonProps {
  displayImage?: boolean;
}

export const CourseCardSkeleton = ({
  displayImage = true,
}: CourseCardSkeletonProps) => {
  return (
    <div className="h-full overflow-hidden rounded-xl border bg-white dark:bg-background">
      {displayImage && <Skeleton className="w-full h-32 rounded-t-xl" />}
      <div className="mt-1 flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-4 w-24 rounded-md" />
        </div>
        <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4 rounded-md" />
      </div>
    </div>
  );
};

export const CategoryItemSkeleton = () => {
  return (
    <div className="flex items-center gap-x-1 rounded-lg border px-3 py-2">
      <Skeleton className="h-4 w-20 rounded-md" />
    </div>
  );
};

export const ProgressSkeleton = () => {
  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <Skeleton className="h-full w-3/4 bg-primary" />
    </div>
  );
};

export const CourseProgressSkeleton = () => {
  return (
    <div className="mt-2">
      <ProgressSkeleton />
      <Skeleton className="h-4 w-24 mt-2 rounded-md" />
    </div>
  );
};

export const CourseSidebarItemSkeleton = () => {
  return (
    <div className="flex items-center gap-x-2 pl-6 text-left text-sm font-semibold text-muted-foreground">
      <Skeleton className="h-4 w-4 rounded-full" />
      <Skeleton className="h-4 w-32 rounded-md" />
    </div>
  );
};

export const CourseImageSkeleton = () => {
  return (
    <Skeleton
      className="w-full py-4 shadow-md"
      style={{ height: '1200px' }}
      role="img"
      aria-label="Loading course image..."
    />
  );
};

export const CourseTitleSkeleton = () => {
  return (
    <div className="mb-2 flex-grow">
      <Skeleton className="h-10 w-3/4" />
    </div>
  );
};

export const CourseButtonsSkeleton = () => {
  return (
    <div className="lg:p-6 flex flex-col sm:py-0 lg:flex-row gap-x-4 items-center w-full lg:w-auto py-4 space-y-6 lg:space-y-0">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-10 w-24" />
    </div>
  );
};

export const CoursePreviewSkeleton = () => {
  return (
    <div className="prose">
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <ul>
        <li>
          <Skeleton className="h-4 w-1/3 mb-2" />
        </li>
        <li>
          <Skeleton className="h-4 w-1/2 mb-2" />
        </li>
        <li>
          <Skeleton className="h-4 w-2/5 mb-4" />
        </li>
      </ul>
      <Skeleton className="h-4 w-4/6 mb-4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};

export const VideoPlayerSkeleton = () => {
  return (
    <div className="relative aspect-video bg-gray-300">
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        <Icons.play className="h-16 w-16 text-gray-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1">
        <Skeleton className="h-full w-1/4 bg-brand" />
      </div>
    </div>
  );
};

// Teacher Courses Skeletons

export const TeacherCoursesFilterSkeleton = () => {
  return (
    <div className="max-w-sm">
      <Skeleton className="h-10 rounded-md" />
    </div>
  );
};

export const TeacherCoursesTableSkeleton = () => {
  return (
    <div className="my-6 rounded-md border bg-white dark:bg-background">
      <div className="rounded-xl">
        <div className="flex">
          <Skeleton className="w-1/2 h-10 m-2 rounded-md" />
          <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
          <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
          <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <div className="flex" key={index}>
            <Skeleton className="w-1/2 h-10 m-2 rounded-md" />
            <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
            <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
            <Skeleton className="w-1/6 h-10 m-2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeacherCoursesPaginationSkeleton = () => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Skeleton className="w-24 h-8 rounded-md" />
      <Skeleton className="w-24 h-8 rounded-md" />
    </div>
  );
};

// Dashboard Skeletons

export const DashboardSkeleton = () => {
  return (
    <div className="md:mt-8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="mt-4 flex cursor-pointer flex-col p-6 transition hover:shadow-md dark:hover:shadow-muted"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="rounded-md h-8 w-8" />
                <Skeleton className="font-medium h-6 w-3/4" />
              </div>
              <Skeleton className="flex-grow mt-4 h-6 w-full" />
              <Skeleton className="mt-4 h-10 w-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export const DashboardCardSkeleton = () => {
  return (
    <div className="md:mt-8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl">
        <div className="mt-4 flex cursor-pointer flex-col p-6 transition hover:shadow-md dark:hover:shadow-muted">
          <div className="flex items-center gap-3">
            <Skeleton className="rounded-md h-8 w-8" />
            <Skeleton className="font-medium h-6 w-3/4" />
          </div>
          <Skeleton className="flex-grow mt-4 h-6 w-full" />
          <Skeleton className="mt-4 h-10 w-full" />
        </div>
      </div>
    </div>
  );
};

// Miscellaneous Skeletons

export const SessionInfoSkeleton = () => {
  return (
    <div className="absolute bottom-6 right-6 bg-alternate/50 backdrop-blur-md p-4 rounded-lg">
      <p className="text-xs font-mono font-bold">For testing purposes</p>
      <Skeleton className="h-4 w-20 mt-2" />
    </div>
  );
};
