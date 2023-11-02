import { cn, Skeleton } from '@ui/index';

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

export const SidebarSkeleton = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="p-6 flex items-center">
        <LogoSkeleton />
        <Skeleton className="text-xs -ml-2 md:-ml-3 w-10 h-3" />{' '}
        {/* beta text */}
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutesSkeleton />
      </div>
      <div className="absolute bottom-6 flex w-full flex-col">
        <FreeCounterSkeleton />
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

export const MobileSidebarSkeleton = () => {
  return (
    <div className="relative inline-block md:hidden">
      <Skeleton className="h-6 w-6" />
      <div className="absolute top-full mt-2 left-0 w-64 rounded-md shadow-lg bg-white p-2">
        <SidebarItemSkeleton />
        <SidebarItemSkeleton />
        <SidebarItemSkeleton />
        <SidebarItemSkeleton />
        <SidebarItemSkeleton />
      </div>
    </div>
  );
};

export const NavbarRoutesSkeleton = () => {
  return (
    <>
      <div className="hidden md:block">
        <SearchInputSkeleton />
      </div>
      <div className="ml-auto flex pr-6">
        <ExitButtonSkeleton />
      </div>
      <div className="flex gap-x-4 mr-6 items-center">
        <ModeToggleSkeleton />
        <CommunityIconSkeleton />
        <UserAvatarSkeleton />
      </div>
    </>
  );
};

export const NavbarSkeleton = () => {
  return (
    <div className="flex h-full items-center p-4 shadow-sm bg-[#dcdfe5] dark:bg-[#16161a]">
      <MobileSidebarSkeleton />
      <NavbarRoutesSkeleton />
      <UserAccountNavSkeleton />
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
