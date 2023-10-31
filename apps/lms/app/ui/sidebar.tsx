import { Logo } from '@ui/index';

import { FreeCounter } from '@/app/ui/free-counter';

import { SidebarRoutes } from '../config/sidebar-routes';

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
      <div className="p-6 flex items-center">
        <Logo fillOnHover className="h-6 md:h-8" />
        <sup className="text-xs -ml-2 md:-ml-3 text-brand font-mono">beta</sup>
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
