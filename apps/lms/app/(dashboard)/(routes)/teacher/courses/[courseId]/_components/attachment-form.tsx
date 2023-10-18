'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Attachment, Course } from '@prisma/client';
import { Button } from '@ui/components/ui/button';
import {
  Cross1Icon,
  FileTextIcon,
  PlusCircledIcon,
  ReloadIcon,
} from '@ui/index';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as z from 'zod';

import { FileUpload } from '@/components/file-upload';

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});

export const AttachmentForm = ({
  initialData,
  courseId,
}: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success('Attachment deleted');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white p-4 dark:bg-background">
      <div className="flex items-center justify-between font-display">
        Course attachments
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className="mt-2 text-sm italic text-muted-foreground">
              No attachments yet
            </p>
          )}
          {initialData.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex w-full items-center rounded-md border bg-white p-3 text-foreground dark:bg-background"
                >
                  <FileTextIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                  <p className="line-clamp-1 text-xs">{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div>
                      <ReloadIcon className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <button
                      onClick={() => onDelete(attachment.id)}
                      className="ml-auto transition hover:opacity-75"
                    >
                      <Cross1Icon className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="mt-4 text-sm text-muted-foreground">
            Add cool stuff to reinforce the learning experience.
          </div>
        </div>
      )}
    </div>
  );
};
