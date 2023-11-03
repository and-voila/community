'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  cn,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
  toast,
} from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Icons } from '@/app/ui/icons';

import { Course } from '.prisma/client';

interface PreviewFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  preview: z
    .string()
    .min(125, {
      message: 'You need to provide a preview of at least 125 characters.',
    })
    .max(165, {
      message: 'Preview text cannot exceed 165 characters.',
    }),
});

export const PreviewForm = ({ initialData, courseId }: PreviewFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preview: initialData?.preview || '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast({
        title: 'Cool, yo!',
        description: 'Your playbook preview has been set.',
      });
      toggleEdit();
      router.refresh();
    } catch {
      toast({
        title: 'Whoops! An error occured.',
        description: 'Please try saving or setting the playbook preview again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white dark:bg-background px-4 py-6">
      <div className="flex items-center justify-between font-semibold mb-4">
        Playbook preview text
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Icons.pencil className="h-4 w-4 mr-2 text-brand" />
              Edit preview
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            'text-base text-muted-foreground mt-2',
            !initialData.preview && 'italic text-destructive',
          )}
        >
          {initialData.preview || 'No preview set'}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="preview"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. 'This is my super duper 158 character max playbook preview text...'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-muted-foreground/70">
                    Your preview text should be SEO optimized and between
                    125-165 characters.
                  </FormDescription>
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
