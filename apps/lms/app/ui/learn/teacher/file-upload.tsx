'use client';

import toast from 'react-hot-toast';

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropzone } from '@/app/lib/uploadthing';

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      className="ut-upload-icon:text-brand ut-label:text-lg ut-label:font-semibold ut-label:mb-2 ut-label:text-foreground ut-allowed-content:ut-uploading:text-foreground ut-allowed-content:ut-uploading:text-base ut-button:bg-brand ut-button:text-sm ut-button:px-2 ut-upload-icon:h-16 bg-muted p-6 ut-allowed-content:text-muted-foreground"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};
