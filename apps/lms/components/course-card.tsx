import Image from 'next/image';
import Link from 'next/link';
import { ListBulletIcon } from '@ui/index';

import { formatPrice } from '@/lib/format';
import { CourseProgress } from '@/components/course-progress';
import { IconBadge } from '@/components/icon-badge';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  displayImage?: boolean;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}
export const CourseCard = ({
  id,
  title,
  description,
  imageUrl,
  displayImage = true,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-xl border bg-white transition hover:shadow-sm dark:bg-background">
        {displayImage && (
          <div className="relative aspect-video w-full overflow-hidden md:grayscale md:group-hover:grayscale-0">
            <Image fill className="object-cover" alt={title} src={imageUrl} />
          </div>
        )}
        <div className="mt-1 flex flex-col p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <p>{category}</p>
            <div className="flex items-center gap-x-1 text-foreground">
              <IconBadge size="sm" icon={ListBulletIcon} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? 'Chapter' : 'Chapters'}
              </span>
            </div>
          </div>
          <div className="line-clamp-1 font-display text-lg leading-7 transition group-hover:text-brand">
            {title}
          </div>
          <p className="my-2 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? 'success' : 'default'}
              size="sm"
              value={progress}
            />
          ) : (
            <p className="mt-2 text-lg font-semibold text-brand">
              {formatPrice(price) === '$0' ? 'Free' : formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
