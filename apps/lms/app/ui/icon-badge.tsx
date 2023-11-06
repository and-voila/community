import { cn, cva, VariantProps } from '@ui/index';

import { IconName, Icons } from './icons';

const backgroundVariants = cva('rounded-xl flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-transparent',
      success: 'bg-emerald-100',
    },
    size: {
      default: 'p-2',
      sm: 'p-1',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const iconVariants = cva('', {
  variants: {
    variant: {
      default: 'text-brand',
      success: 'text-emerald-700',
    },
    size: {
      default: 'h-6 w-6',
      sm: 'h-4 w-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: IconName;
}

export const IconBadge = ({ icon, variant, size }: IconBadgeProps) => {
  const Icon = Icons[icon];
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  );
};
