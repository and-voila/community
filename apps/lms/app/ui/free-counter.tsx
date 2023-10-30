/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { MAX_FREE_TOKENS } from '@/constants';
import { useAuth } from '@clerk/nextjs';
import { Button, Card, CardContent, Progress } from 'ui';

import { useProModal } from '@/app/hooks/use-pro-modal';
import { isTeacher } from '@/app/lib/teacher';

import { Icons } from './icons';

interface FreeCounterProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export const FreeCounter = ({
  apiLimitCount = 0,
  isPaidMember = false,
}: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPaidMember) {
    return null;
  }

  if (isTeacher(userId)) {
    return null;
  }

  return (
    <div className="px-2">
      <Card className="border bg-primary-foreground">
        <CardContent className="py-4">
          <div className="mb-4 space-y-2 text-center text-xs text-foreground">
            <h2 className="text-lg text-foreground font-display uppercase">
              Get Early Access
            </h2>
            <p className="text-muted-foreground">
              You&apos;re on the free Good plan. Upgrade to the Best plan for
              some real magic.
            </p>
            {/*<p>
              You&apos;ve used {apiLimitCount} / {MAX_FREE_TOKENS} AI tokens.
            </p>
            <Progress
              value={(apiLimitCount / MAX_FREE_TOKENS) * 100}
              className="h3"
            />*/}
          </div>
          <Button onClick={proModal.onOpen} className="w-full" variant="custom">
            Upgrade
            <Icons.magic className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
