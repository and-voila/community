/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { MAX_FREE_TOKENS } from '@/constants';
import { useAuth } from '@clerk/nextjs';
import { useProModal } from 'hooks/use-pro-modal';
import { Button, Card, CardContent, MagicWandIcon, Progress } from 'ui';

import { isTeacher } from '@/lib/teacher';

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
    <div className="px-4">
      <Card className="border bg-primary-foreground">
        <CardContent className="py-4">
          <div className="mb-4 space-y-2 text-center text-xs text-foreground">
            <h2 className="text-lg text-foreground font-semibold uppercase">
              {' '}
              Get early access
            </h2>
            <p className="text-muted-foreground">
              Get the And Voila Best plan today, then get ready for some fire.
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
            <MagicWandIcon className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
