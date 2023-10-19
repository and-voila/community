'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Course } from '@prisma/client';
import { Button } from '@ui/components/ui/button';
import { ImageIcon, Pencil1Icon, PlusCircledIcon } from '@ui/index';
import axios from 'axios';
import toast from 'react-hot-toast';
import { minLength, object, Output, parse, string } from 'valibot';

import { FileUpload } from '@/components/file-upload';

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = object({
  imageUrl: string('Image is required', [minLength(1)]),
});

type FormData = Output<typeof formSchema>;

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: { imageUrl: string }) => {
    try {
      const data: FormData = parse(formSchema, values);
      await axios.patch(`/api/courses/${courseId}`, data);
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-white p-4 dark:bg-background">
      <div className="flex items-center justify-between font-medium mb-4">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircledIcon className="mr-2 h-4 w-4 text-brand" />
              Add an image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil1Icon className="mr-2 h-4 w-4 text-brand" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className="flex h-60 items-center justify-center rounded-md bg-muted">
            <ImageIcon className="h-10 w-10 text-brand" />
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
            Use a 2400px X 1260px image.
          </div>
        </div>
      )}
    </div>
  );
};
