import { clsx } from '@ui/index';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Cross2Icon } from 'ui';

import { removeItem } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import type { CartItem } from '@/lib/shopify/types';

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-muted-foreground transition-all duration-200',
        {
          'cursor-not-allowed px-0': isPending,
        },
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-primary-foreground" />
      ) : (
        <Cross2Icon className="mx-[1px] h-4 w-4 text-primary-foreground" />
      )}
    </button>
  );
}
