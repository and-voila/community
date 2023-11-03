'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import { toast, TrashIcon } from '@ui/index';
import axios from 'axios';

import { ConfirmModal } from '@/app/ui/modals/confirm-modal';

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

export const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/unpublish`,
        );
        toast({
          title: '1,2,3 and done!',
          description: 'Your play has been unpublished.',
        });
      } else {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/publish`,
        );
        toast({
          title: 'That was painless.',
          description: 'Your fancy new play has been published.',
        });
      }

      router.refresh();
    } catch {
      toast({
        title: 'An error occurred.',
        description: 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);

      toast({
        title: 'Oh boy, that was fast.',
        description: 'Your play has been deleted, like forever.',
      });
      router.refresh();
      router.push(`/learn/teacher/courses/${courseId}`);
    } catch {
      toast({
        title: 'Aw, snap! Not again.',
        description: 'An error occured, so please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <TrashIcon className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
