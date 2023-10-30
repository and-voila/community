import { Sheet, SheetContent, SheetTrigger } from 'ui';

import { Icons } from '@/app/ui/icons';

import { MainSidebar } from './main-sidebar';

interface MainMobileSidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const MainMobileSidebar = ({
  apiLimitCount = 0,
  isPaidMember = false,
}: MainMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Icons.hamburgerMenu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <MainSidebar
          isPaidMember={isPaidMember}
          apiLimitCount={apiLimitCount}
        />
      </SheetContent>
    </Sheet>
  );
};
