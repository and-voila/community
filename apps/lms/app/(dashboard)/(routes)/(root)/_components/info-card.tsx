import { LucideIcon } from 'lucide-react';

import { IconBadge } from '@/components/icon-badge';

interface InfoCardProps {
  numberOfItems: number;
  variant?: 'default' | 'success';
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border bg-white p-3 dark:bg-background">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">
          {numberOfItems} {numberOfItems === 1 ? 'Course' : 'Courses'}
        </p>
      </div>
    </div>
  );
};
