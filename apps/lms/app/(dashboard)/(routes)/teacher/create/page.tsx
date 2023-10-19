'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { valibotResolver } from '@hookform/resolvers/valibot';
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
import { H5 } from '@ui/index';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { minLength, object, Output, string } from 'valibot';

const formSchema = object({
  title: string('Title is required', [minLength(1)]),
});

type FormValues = Output<typeof formSchema>;

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: valibotResolver(formSchema),
    defaultValues: { title: '' },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post('/api/courses', values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success('Course created');
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mx-auto mt-24 flex rounded-xl border bg-white p-6 shadow-md dark:bg-background md:mt-32 md:max-w-3xl md:justify-center md:p-12">
      <div>
        <H5 as="h1">Course title</H5>
        <p className="text-base text-muted-foreground">
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
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
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
