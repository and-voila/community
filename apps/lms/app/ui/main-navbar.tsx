import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getApiLimitCount } from '@/app/lib/api-limit';

import { MainNavbarRoutes } from '../config/main-navbar-routes';
import { MainMobileSidebar } from './mainmobile-sidebar';

export const MainNavbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPaidMember = await checkSubscription();
  return (
    <div className="flex h-full items-center border-b bg-[#dcdfe5] p-4 shadow-sm dark:bg-[#16161a]">
      <MainMobileSidebar
        isPaidMember={isPaidMember}
        apiLimitCount={apiLimitCount}
      />
      <MainNavbarRoutes />
    </div>
  );
};
