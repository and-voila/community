'use client';

import toast from 'react-hot-toast';

import { UploadDropzone } from '@/lib/uploadthing';
import { ourFileRouter } from '@/app/api/uploadthing/core';

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      className="ut-upload-icon:text-brand ut-label:text-lg ut-label:font-semibold ut-label:mb-2 ut-allowed-content:ut-uploading:text-foreground ut-allowed-content:ut-uploading:text-base ut-button:bg-brand ut-button:text-sm ut-button:px-2 ut-upload-icon:h-16 bg-muted p-6"
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
