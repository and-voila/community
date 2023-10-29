import Image from 'next/image';
import Link from 'next/link';

import { getCoursePrice } from '@/lib/course-pricing';

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
    <Link href={`/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-xl border bg-white transition hover:shadow-sm dark:bg-background">
        {displayImage && (
          <div className="relative aspect-video w-full overflow-hidden md:grayscale md:group-hover:grayscale-0">
            <Image fill className="object-cover" alt={title} src={imageUrl} />
          </div>
        )}
        <div className="mt-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-muted-foreground font-mono text-sm">
              {category}
            </p>
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
          </div>
          <div className="line-clamp-2 font-semibold text-lg leading-tight transition group-hover:text-brand">
            {title}
          </div>
          <p className="my-2 line-clamp-2 text-sm text-muted-foreground">
            {preview}
          </p>
        </div>
      </div>
    </Link>
  );
};
