import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getApiLimitCount } from '@/app/lib/api-limit';

import { MainNavbar } from '../../ui/main-navbar';
import { MainSidebar } from '../../ui/main-sidebar';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPaidMember = await checkSubscription();

  return (
    <div className="h-full bg-background dark:bg-[#242629]">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-72">
        <MainNavbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-72 flex-col md:flex">
        <MainSidebar
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </div>
      <main className="h-full pt-[80px] md:pl-72">{children}</main>
    </div>
  );
};

export default DashboardLayout;
