import { HamburgerMenuIcon } from '@ui/index';
import { Sheet, SheetContent, SheetTrigger } from 'ui';

import { Sidebar } from './sidebar';

interface MobileSidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPaidMember = false,
}: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <Sidebar isPaidMember={isPaidMember} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
