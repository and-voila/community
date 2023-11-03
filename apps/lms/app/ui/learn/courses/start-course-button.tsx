'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import { toast } from '@ui/index';
import axios from 'axios';

import { Icons } from '@/app/ui/icons';

interface StartCourseButtonProps {
  chapterId: string;
  courseId: string;
  isStarted?: boolean;
  firstChapterId: string;
}

export const StartCourseButton = ({
  chapterId,
  courseId,
  isStarted,
  firstChapterId,
}: StartCourseButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/started`,
        {
          isStarted: true,
        },
      );

      if (!isStarted) {
        router.push(`/learn/courses/${courseId}/chapters/${firstChapterId}`);
      }

      toast({
        title: '#LFG',
        description: 'Your playbook has been started',
      });
      router.refresh();
    } catch {
      toast({
        title: 'Oh no, an error occurred.',
        description: 'Please try again, that usually does the trick.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      variant="custom"
      className="w-full flex-shrink-0 md:w-auto"
    >
      {'Start the Playbook'}
      <Icons.play className="ml-2 h-4 w-4" />
    </Button>
  );
};
