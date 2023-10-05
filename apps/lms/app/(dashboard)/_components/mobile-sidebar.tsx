import { LucideReact } from '@ui/index';
import { Sheet, SheetContent, SheetTrigger } from 'ui';

import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <LucideReact.Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
