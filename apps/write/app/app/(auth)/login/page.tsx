import { Suspense } from 'react';
import { Logo } from '@ui/index';

import LoginButton from './login-button';

export default function LoginPage() {
  return (
    <div className="mx-5 border bg-primary-foreground p-6 py-10 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
      <Logo fillOnHover className="mx-auto h-6 md:h-8" />
      <h1 className="font-cal mt-6 text-center text-3xl dark:text-white">
        AI Assisted Blog
      </h1>
      <p className="py-4 text-center text-base text-muted-foreground">
        Set-up your own personal blog in 3 minutes or less.{' '}
        <a
          className="font-medium text-foreground hover:text-brand"
          href="https://andvoila.gg/blog/announcing-and-voila-writing-assistant"
          rel="noreferrer"
          target="_blank"
        >
          Read the announcement.
        </a>
      </p>

      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense
          fallback={
            <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
          }
        >
          <LoginButton />
        </Suspense>
      </div>
    </div>
  );
}
