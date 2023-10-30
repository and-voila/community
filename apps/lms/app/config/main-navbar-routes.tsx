import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@ui/index';

export const MainNavbarRoutes = () => {
  return (
    <div className="flex mx-auto justify-end gap-x-4 mr-6">
      <ModeToggle />
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};
