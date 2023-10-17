import Link from 'next/link';
import { cn } from '@ui/lib/utils';

import { marketingConfig } from '@/config/marketing';
import { getCurrentUser } from '@/lib/session';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { UserAccountNav } from '@/components/user-account-nav';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          {user ? (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          ) : (
            <nav>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'px-4 mr-4',
                )}
                aria-label="Navigate to Login page"
              >
                Login
              </Link>
              <Link
                href="/register"
                className={cn(buttonVariants({ variant: 'custom' }), 'px-4')}
                aria-label="Navigate to sign up page"
              >
                Sign Up
              </Link>
            </nav>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
