import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
import { NavbarRoutes } from '@/components/navbar-routes';

import { MobileSidebar } from './mobile-sidebar';

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex h-full items-center border-b bg-[#dcdfe5] p-4 shadow-sm dark:bg-[#16161a]">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
