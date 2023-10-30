import { FunctionComponent } from 'react';

import { IconBadge } from '@/app/ui/icon-badge';

interface InfoCardProps {
  numberOfItems: number;
  variant?: 'default' | 'success';
  label: string;
  icon: FunctionComponent;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border bg-white p-3 shadow dark:bg-background">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">
          {numberOfItems} {numberOfItems === 1 ? 'Playbook' : 'Playbooks'}
        </p>
      </div>
    </div>
  );
};
