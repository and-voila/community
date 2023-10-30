import { NavbarRoutes } from '@/app/config/navbar-routes';
import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getApiLimitCount } from '@/app/lib/api-limit';

import { MobileSidebar } from './mobile-sidebar';

export const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPaidMember = await checkSubscription();
  return (
    <div className="flex h-full items-center border-b bg-[#dcdfe5] p-4 shadow-sm dark:bg-[#16161a]">
      <MobileSidebar
        isPaidMember={isPaidMember}
        apiLimitCount={apiLimitCount}
      />
      <NavbarRoutes />
    </div>
  );
};
