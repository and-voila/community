'use client';

import { cn } from '@ui/index';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { useState } from 'react';

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
