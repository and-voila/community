'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Course } from '@prisma/client';
import { Button } from '@ui/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@ui/components/ui/form';
import { Textarea } from '@ui/components/ui/textarea';
import { cn, Pencil1Icon } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { minLength, object, Output, parse, string } from 'valibot';

interface DescriptionFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = object({
  description: string('Description is required', [minLength(1)]),
});

type FormData = Output<typeof formSchema>;

export const DescriptionForm = ({
  initialData,
  courseId,
}: DescriptionFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<FormData>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      description: initialData?.description || '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: { description: string }) => {
    try {
      const data: FormData = parse(formSchema, values);
      await axios.patch(`/api/courses/${courseId}`, data);
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Crap! Sam sucks. Try again.');
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white p-4 dark:bg-background">
      <div className="flex items-center justify-between font-medium mb-4">
        Course description
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
        <p
          className={cn(
            'mt-2 text-sm',
            !initialData.description && 'italic text-muted-foreground',
          )}
        >
          {initialData.description || 'No description'}
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="py-4"
                      disabled={isSubmitting}
                      placeholder="e.g. 'You'll master the fine art of doing nothing, yet appearing extremely busy. Learn to strategically delay tasks, perfect your 'I'll do it tomorrow' excuses, and cultivate the illusion of constant activity.'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm">
                    A 158 character description for the course that doubles as
                    the SEO Meta description optimized for JTBD, Hooked, and
                    PAS. IKR!? It can be more, just ensure the first paragraph
                    is optimized.
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
