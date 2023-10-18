'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@ui/index';

interface BlurImageProps extends ImageProps {}

export default function BlurImage(props: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        'duration-700 ease-in-out',
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
