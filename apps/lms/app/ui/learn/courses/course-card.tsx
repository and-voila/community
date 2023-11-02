import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@ui/index';

import { getCoursePrice } from '@/app/lib/course-pricing';

interface CourseCardProps {
  id: string;
  title: string;
  preview: string;
  imageUrl: string;
  displayImage?: boolean;
  price: number;
  progress: number | null;
  category: string;
  isPaidMember: boolean;
  purchased: boolean;
}
export const CourseCard = ({
  id,
  title,
  preview,
  imageUrl,
  displayImage = true,
  price,
  progress,
  category,
  isPaidMember,
  purchased,
}: CourseCardProps) => {
  const displayPrice = getCoursePrice(price, isPaidMember, purchased);

  return (
    <Link href={`/learn/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-xl border bg-white transition hover:shadow-sm dark:bg-background">
        {displayImage && (
          <div className="relative aspect-video w-full overflow-hidden md:grayscale md:group-hover:grayscale-0">
            <Suspense
              fallback={
                <Skeleton className="relative aspect-video w-full h-32" />
              }
            >
              <Image fill className="object-cover" alt={title} src={imageUrl} />
            </Suspense>
          </div>
        )}
        <div className="mt-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-2">
            <Suspense fallback={<Skeleton className="w-12 h-4" />}>
              <p className="text-muted-foreground font-mono text-sm">
                {category}
              </p>
            </Suspense>
            <Suspense fallback={<Skeleton className="w-12 h-4" />}>
              {progress !== null ? (
                progress === 0 ? (
                  <p className="text-sm text-brand font-mono">Not Started</p>
                ) : progress === 100 ? (
                  <p className="text-sm text-alternate font-mono">Complete</p>
                ) : (
                  <p className="text-sm text-brand font-mono">In Progress</p>
                )
              ) : (
                <p className="text-sm text-brand font-mono">{displayPrice}</p>
              )}
            </Suspense>
          </div>
          <Suspense fallback={<Skeleton className="h-8 w-3/4" />}>
            <div className="line-clamp-2 font-semibold text-lg leading-tight transition group-hover:text-brand">
              {title}
            </div>
          </Suspense>
          <Suspense fallback={<Skeleton className="h-24 w-3/5" />}>
            <p className="my-2 line-clamp-2 text-sm text-muted-foreground">
              {preview}
            </p>
          </Suspense>
        </div>
      </div>
    </Link>
  );
};
