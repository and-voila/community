import { Sheet, SheetContent, SheetTrigger } from 'ui';

import { MobileSidebarProps } from '@/app/lib/types';
import { Icons } from '@/app/ui/icons';

import { Sidebar } from './sidebar';

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPaidMember = false,
}: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Icons.hamburgerMenu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <Sidebar isPaidMember={isPaidMember} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
