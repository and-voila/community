'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
  Input,
  Label,
  toast,
} from '@ui/index';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { userAuthSchema } from '@/app/lib/validations/user-auth';
import { Icons } from '@/app/ui/icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isRegistration?: boolean;
}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({
  className,
  isRegistration,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDiscordLoading, setIsDiscordLoading] =
    React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/',
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    });
  }

  return (
    <div className={cn('max-w-sm', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="py-6">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-display pb-2">
              {isRegistration ? 'Create your free account' : 'Welcome back'}
            </CardTitle>
            <CardDescription>
              {isRegistration
                ? 'Use Discord, Google, or enter your email to create an account.'
                : "Use Discord, Google, or enter your email and we'll send you a magic link."}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6 py-2">
              <button
                type="button"
                className={cn(buttonVariants({ variant: 'custom' }))}
                onClick={() => {
                  setIsDiscordLoading(true);
                  signIn('discord');
                }}
                disabled={isLoading || isDiscordLoading}
              >
                {isDiscordLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.discord className="mr-2 h-5 w-5" />
                )}{' '}
                Discord
              </button>
              <button
                type="button"
                className={cn(buttonVariants({ variant: 'custom' }))}
                onClick={() => {
                  setIsGoogleLoading(true);
                  signIn('google');
                }}
                disabled={isLoading || isGoogleLoading}
              >
                {isGoogleLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.google className="mr-2 h-5 w-5" />
                )}{' '}
                Google
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-brand/70" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-mono">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="frida@kahlo.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading || isGoogleLoading || isDiscordLoading}
                {...register('email')}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <button
              className={cn('w-full', buttonVariants({ variant: 'secondary' }))}
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isRegistration ? 'Register with email' : 'Log in with email'}
            </button>
            {!isRegistration && (
              <p className="text-xs text-muted-foreground">
                Don&apos;t have an account? No sweat,{' '}
                <Link
                  href="/register"
                  aria-label="Navigate to And Voila's Registration page to create an account."
                  className="text-brand hover:underline"
                >
                  create one
                </Link>
                .
              </p>
            )}
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default UserAuthForm;
