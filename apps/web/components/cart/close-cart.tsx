import { clsx } from '@ui/index';
import { Cross1Icon } from 'ui';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors">
      <Cross1Icon
        className={clsx(
          'h-6 w-6 transition-all ease-in-out hover:scale-110 ',
          className,
        )}
      />
    </div>
  );
}
