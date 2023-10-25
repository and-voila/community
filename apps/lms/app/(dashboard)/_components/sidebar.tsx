import { Logo } from '@ui/index';

import { FreeCounter } from '@/components/free-counter';

import { SidebarRoutes } from './sidebar-routes';

interface SidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const Sidebar = ({
  apiLimitCount,
  isPaidMember = false,
}: SidebarProps) => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="p-6">
        <Logo fillOnHover className="h-6 md:h-8" />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
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
