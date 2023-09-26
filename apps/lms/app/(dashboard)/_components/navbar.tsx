import { NavbarRoutes } from '@/components/navbar-routes';

import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
  return (
    <div className="flex h-full items-center border-b bg-[#dcdfe5] p-4 shadow-sm dark:border-brand/30 dark:bg-[#16161a]">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
