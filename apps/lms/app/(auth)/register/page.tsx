import Link from 'next/link';
import { buttonVariants, cn, Logo } from '@ui/index';

import UserAuthForm from '@/app/ui/user-auth-form';

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'absolute right-6 top-6 md:right-10 md:top-10',
          )}
        >
          Log in
        </Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="p-6 flex items-center justify-center">
            <Logo fillOnHover className="h-6 md:h-8" />
            <sup className="text-xs -ml-2 md:-ml-3 text-brand font-mono">
              beta
            </sup>
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <UserAuthForm isRegistration />
          <p className="text-sm text-muted-foreground max-w-xs mt-4 text-center mx-auto">
            No credit card required. If you&apos;re interested, here&apos;s our
            <Link
              href="https://andvoila.gg/privacy"
              target="_blank"
              aria-label="Naivgate to And Voila's Privacy Policy on their website in a new window"
              className="text-brand hover:underline"
            >
              {' '}
              Privacy Policy{' '}
            </Link>
            and{' '}
            <Link
              href="https://andvoila.gg/terms"
              target="_blank"
              aria-label="Naivgate to And Voila's Terms of Service on their website in a new window"
              className="text-brand hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
