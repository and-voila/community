import { Logo } from '@ui/index';

import { FreeCounter } from '@/app/ui/free-counter';

import { MainSidebarRoutes } from '../config/main-sidebar-routes';

interface MainSidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const MainSidebar = ({
  apiLimitCount,
  isPaidMember = false,
}: MainSidebarProps) => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="p-6">
        <Logo fillOnHover className="h-6 md:h-8" />
      </div>
      <div className="flex w-full flex-col">
        <MainSidebarRoutes />
      </div>
      <div className="absolute bottom-6 flex w-full flex-col">
        <FreeCounter
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </div>
    </div>
  );
};
