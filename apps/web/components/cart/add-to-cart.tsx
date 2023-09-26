'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { PlusIcon } from 'ui';

import { addItem } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import { ProductVariant } from '@/lib/shopify/types';

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const title = !availableForSale
    ? 'Out of stock'
    : !selectedVariantId
    ? 'Please select options'
    : undefined;

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !selectedVariantId) return;

        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className={clsx(
        'relative flex w-full items-center justify-center rounded-xl bg-brand p-4 font-display uppercase tracking-wide text-white hover:opacity-90',
        {
          'cursor-not-allowed opacity-60 hover:opacity-60':
            !availableForSale || !selectedVariantId,
          'cursor-not-allowed': isPending,
        },
      )}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? (
          <PlusIcon className="h-6 w-6" />
        ) : (
          <LoadingDots className="mb-3 bg-primary-foreground" />
        )}
      </div>
      <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
    </button>
  );
}
