import { IconBadge } from '@/app/ui/icon-badge';
import { IconName } from '@/app/ui/icons';

interface InfoCardProps {
  numberOfItems: number;
  variant?: 'default' | 'success';
  label: string;
  icon: IconName;
}

export const InfoCard = ({
  variant,
  icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border bg-white p-3 shadow dark:bg-background">
      <IconBadge variant={variant} icon={icon} />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">
          {numberOfItems} {numberOfItems === 1 ? 'Playbook' : 'Playbooks'}
        </p>
      </div>
    </div>
  );
};
