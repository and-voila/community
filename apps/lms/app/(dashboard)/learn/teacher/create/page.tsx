'use client';

import Link from 'next/link';
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
  FormLabel,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { H4 } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/courses', {
        ...values,
        price: COURSE_DEFAULT_PRICE,
      });
      router.push(`/learn/teacher/courses/${response.data.id}`);
      toast.success('Course created');
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mx-auto mt-24 flex rounded-xl border bg-white p-6 shadow-md dark:bg-background md:mt-32 md:max-w-3xl md:justify-center md:p-12">
      <div>
        <H4 as="h1" className="mb-4">
          Name the course
        </H4>
        <p className="text-sm lg:text-base text-muted-foreground">
          Choose a short and SEO friendly title for your course.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'The art of procrastination'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Use sentence case for your title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost" size="sm">
                  Cancel
                </Button>
              </Link>
              <Button
                variant="custom"
                type="submit"
                size="sm"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
