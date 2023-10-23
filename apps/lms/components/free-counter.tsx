'use client';

import { useEffect, useState } from 'react';
import { MAX_FREE_TOKENS } from '@/constants';
import { useAuth } from '@clerk/nextjs';
import { useProModal } from 'hooks/use-pro-modal';
import { Button, Card, CardContent, MagicWandIcon, Progress } from 'ui';

import { isTeacher } from '@/lib/teacher';

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
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

  if (isPro) {
    return null;
  }

  if (isTeacher(userId)) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="border bg-primary-foreground">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-foreground">
            <p>
              You&apos;ve used {apiLimitCount} / {MAX_FREE_TOKENS} AI tokens.
            </p>
            <Progress
              value={(apiLimitCount / MAX_FREE_TOKENS) * 100}
              className="h3"
            />
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
