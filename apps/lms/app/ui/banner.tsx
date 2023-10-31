import { cn, cva, VariantProps } from '@ui/index';

import { Icons } from './icons';

const bannerVariants = cva(
  'border-2 text-center p-4 text-base flex items-center w-full',
  {
    variants: {
      variant: {
        warning: 'bg-yellow-400 border-yellow-600 text-black',
        success: 'bg-alternate border-green-600 text-white',
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
  warning: Icons.warning,
  success: Icons.circleChecked,
};

export const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || 'warning'];

  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="mr-2 h-6 w-6" />
      {label}
    </div>
  );
};
