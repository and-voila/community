'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useConfettiStore } from '@/app/hooks/use-confetti-store';
import { Icons } from '@/app/ui/icons';
import { ConfirmModal } from '@/app/ui/modals/confirm-modal';

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success('Course unpublished');
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success('Course published');
        confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast.success('Course deleted');
      router.refresh();
      router.push('/learn/teacher/courses');
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant={isPublished ? 'destructive' : 'custom'}
        size="sm"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Icons.trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};