'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Chapter } from '@prisma/client';
import { Button } from '@ui/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@ui/components/ui/form';
import { cn, Pencil1Icon } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { minLength, object, Output, string } from 'valibot';

import { Preview } from '@/components/preview';
import { QuillEditor } from '@/components/quill-editor';

interface ChapterDescriptionFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = object({
  description: string('Description is required', [minLength(1)]),
});

type FormValues = Output<typeof formSchema>;

export const ChapterDescriptionForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterDescriptionFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      description: initialData?.description || '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values,
      );
      toast.success('Chapter description updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Yikes, something broke. Try again.');
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white p-4 dark:bg-background">
      <div className="flex items-center justify-between font-medium mb-4">
        Chapter description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil1Icon className="mr-2 h-4 w-4 text-brand" />
              Edit description
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={cn(
            'mt-2 text-sm',
            !initialData.description && 'italic text-muted-foreground',
          )}
        >
          {!initialData.description && 'No description'}
          {initialData.description && (
            <Preview value={initialData.description} />
          )}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <QuillEditor {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                size="sm"
                variant="custom"
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
