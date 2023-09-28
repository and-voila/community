import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CourseProgress } from '@/components/course-progress';
import { IconBadge } from '@/components/icon-badge';
import { formatPrice } from '@/lib/format';

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-xl border bg-white transition hover:shadow-sm dark:bg-background">
        <div className="relative aspect-video w-full overflow-hidden md:grayscale md:group-hover:grayscale-0">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col p-3 pt-2">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <p>{category}</p>
            <div className="flex items-center gap-x-1 text-foreground">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? 'Chapter' : 'Chapters'}
              </span>
            </div>
          </div>
          <div className="line-clamp-2 font-display text-lg leading-6 transition group-hover:text-brand md:h-12">
            {title}
          </div>
          {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? 'success' : 'default'}
              size="sm"
              value={progress}
            />
          ) : (
            <p className="text-md mt-2 font-display text-brand">
              {formatPrice(price) === '$0' ? 'Free' : formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
