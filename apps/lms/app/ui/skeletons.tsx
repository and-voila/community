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
