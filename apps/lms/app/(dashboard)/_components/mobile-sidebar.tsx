import { HamburgerMenuIcon } from '@ui/index';
import { Sheet, SheetContent, SheetTrigger } from 'ui';

import { Sidebar } from './sidebar';

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
