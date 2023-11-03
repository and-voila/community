'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { COURSE_DEFAULT_PRICE } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@ui/components/ui/form';
import { Switch } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import { Icons } from '@/app/ui/icons';

import { Course } from '.prisma/client';

interface PriceFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  isFree: z.boolean(),
});

export const PriceForm = ({ initialData, courseId }: PriceFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFree: initialData?.price === 0,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const price = values.isFree ? 0 : COURSE_DEFAULT_PRICE;

      await axios.patch(`/api/courses/${courseId}`, {
        price,
      });
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white px-4 py-6 dark:bg-background">
      <div className="flex items-center justify-between font-semibold mb-4">
        Course access
        <Button onClick={toggleEdit} variant="ghost" aria-label="Edit access">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Icons.pencil className="mr-2 h-4 w-4 text-brand" />
              Edit access
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="mt-2 text-base lg:text-lg text-muted-foreground">
          {initialData.price === 0 ? 'Free' : 'Paid'}
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
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      role="switch"
                      aria-checked={field.value}
                      aria-label="Toggle playbook free status"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription id="switch-label" className="text-base">
                      {field.value
                        ? 'The playbook is currently Free.'
                        : 'The playbook is currently Paid.'}
                    </FormDescription>
                  </div>
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
