'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import { toast } from '@ui/index';
import axios from 'axios';
import * as z from 'zod';

import { Icons } from '@/app/ui/icons';
import { FileUpload } from '@/app/ui/learn/teacher/file-upload';

import { Course } from '.prisma/client';

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: 'Image is required',
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast({
        title: "You're an uploading wizard!",
        description: 'Your image has been added to the playbook.',
      });
      toggleEdit();
      router.refresh();
    } catch {
      toast({
        title: 'Ugh, something broke.',
        description:
          'Please try uploading the image again, or saving it again. Whichever will work this time.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white px-4 py-6 dark:bg-background">
      <div className="flex items-center justify-between font-semibold mb-4">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <Icons.plusCircled className="mr-2 h-4 w-4 text-brand" />
              Add an image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Icons.pencil className="mr-2 h-4 w-4 text-brand" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className="flex h-60 items-center justify-center rounded-md bg-muted">
            <Icons.image className="h-10 w-10 text-brand" />
          </div>
        ) : (
          <div className="relative mt-2 aspect-video">
            <Image
              alt="Upload"
              fill
              className="rounded-md object-cover"
              src={initialData.imageUrl}
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <div className="mt-4 text-sm text-muted-foreground">
            Upload a 2400px x 1260px image.
          </div>
        </div>
      )}
    </div>
  );
};
