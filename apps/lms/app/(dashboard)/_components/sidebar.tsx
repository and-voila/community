import { Logo } from '@ui/index';

import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm">
      <div className="p-6">
        <Logo fillOnHover className="h-8 md:h-10" />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
};
