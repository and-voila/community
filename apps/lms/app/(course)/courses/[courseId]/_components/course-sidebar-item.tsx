'use client';

import { usePathname, useRouter } from 'next/navigation';
import { CheckCircledIcon, cn, LockClosedIcon, PlayIcon } from '@ui/index';

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isLocked
    ? LockClosedIcon
    : isCompleted
    ? CheckCircledIcon
    : PlayIcon;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 pl-6 text-left text-base font-semibold text-muted-foreground transition-all hover:bg-gray-400/20 hover:text-foreground',
        isActive &&
          'bg-brand/20 text-foreground hover:bg-brand/20 hover:text-foreground',
        isCompleted && 'text-foreground line-through hover:text-[#186343]',
        isCompleted && isActive && 'bg-emerald-200/20',
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          className={cn(
            'text-muted-foreground h-4 w-4 md:h-5 md:w-5',
            isActive && 'text-brand',
            isCompleted && 'text-alternate',
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto h-full border-2 border-brand opacity-0 transition-all',
          isActive && 'opacity-100',
          isCompleted && 'border-[#186343]',
        )}
      />
    </button>
  );
};
