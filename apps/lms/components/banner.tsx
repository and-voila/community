import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle, CheckCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const bannerVariants = cva(
  'border text-center p-4 text-sm flex items-center w-full',
  {
    variants: {
      variant: {
        warning: 'bg-yellow-200/80 border-yellow-500 text-black',
        success: 'bg-emerald-700 border-emerald-800 text-white',
      },
    },
    defaultVariants: {
      variant: 'warning',
    },
  },
);

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
};

export const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || 'warning'];

  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </div>
  );
};
