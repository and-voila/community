import { Logo } from '@ui/index';

import SidebarQuickLinks from '@/components/sidebar-quick-links';

import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#d0d5dd] shadow-sm dark:bg-[#010101]">
      <div className="p-6">
        <Logo fillOnHover className="h-6 md:h-8" />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
        <SidebarQuickLinks />
      </div>
    </div>
  );
};
