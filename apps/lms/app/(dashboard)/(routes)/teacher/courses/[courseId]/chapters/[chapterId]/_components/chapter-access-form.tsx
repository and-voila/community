'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Chapter } from '@prisma/client';
import { Button } from '@ui/components/ui/button';
import { Checkbox } from '@ui/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@ui/components/ui/form';
import { cn, Pencil1Icon } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { boolean, object, Output } from 'valibot';

interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = object({
  isFree: boolean(),
});

type FormValues = Output<typeof formSchema>;

export const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterAccessFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: valibotResolver(formSchema),
    defaultValues: { isFree: !!initialData.isFree },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values,
      );
      toast.success('Chapter updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white p-4 dark:bg-background">
      <div className="flex items-center justify-between font-display">
        Chapter access
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil1Icon className="mr-2 h-4 w-4" />
              Edit access
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            'mt-2 text-sm',
            !initialData.isFree && 'italic text-muted-foreground',
          )}
        >
          {initialData.isFree ? (
            <>This chapter is free for preview.</>
          ) : (
            <>This chapter is not free.</>
          )}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      Check this box if you want to make this chapter free for
                      preview
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
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
