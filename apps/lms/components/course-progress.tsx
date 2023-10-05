import { Progress } from '@ui/components/ui/progress';
import { cn } from '@ui/index';

interface CourseProgressProps {
  value: number;
  variant?: 'default' | 'success';
  size?: 'default' | 'sm';
}

const colorByVariant = {
  default: 'text-foreground',
  success: 'text-foreground',
};

const sizeByVariant = {
  default: 'text-sm',
  sm: 'text-xs',
};

const variantClasses = {
  default: 'default-class',
  success: 'success-class',
};

export const CourseProgress = ({
  value,
  variant = 'default',
  size,
}: CourseProgressProps) => {
  const progressClass = variantClasses[variant];

  return (
    <div>
      <Progress className={`h-2 ${progressClass}`} value={value} />
      <p
        className={cn(
          'mt-2 font-medium text-foreground',
          colorByVariant[variant],
          sizeByVariant[size || 'default'],
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
