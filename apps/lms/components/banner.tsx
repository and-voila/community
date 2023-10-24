import {
  CheckCircledIcon,
  cn,
  cva,
  ExclamationTriangleIcon,
  VariantProps,
} from '@ui/index';

const bannerVariants = cva(
  'border-2 text-center p-4 text-sm flex items-center w-full',
  {
    variants: {
      variant: {
        warning: 'bg-yellow-400 border-yellow-600 text-black',
        success: 'bg-green-600 border-green-800 text-white',
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
  warning: ExclamationTriangleIcon,
  success: CheckCircledIcon,
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
