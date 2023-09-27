import { Logo, ModeToggle } from '@ui/index';

import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="p-6">
        <Logo fillOnHover className="h-8 md:h-10" />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
      <div className="absolute bottom-0 p-4">
        <ModeToggle />
      </div>
    </div>
  );
};
