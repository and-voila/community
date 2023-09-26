import { AddToCart } from '@/components/cart/add-to-cart';
import { GradientHeading } from '@/components/gradient-headings';
import Price from '@/components/price';
import { VariantSelector } from '@/components/product/variant-selector';
import Prose from '@/components/prose';
import { Product } from '@/lib/shopify/types';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-border pb-6">
        <div className="mb-6">
          <GradientHeading level="h4" as="h1">
            {product.title}
          </GradientHeading>
        </div>
        <div className="mr-auto w-auto rounded-xl bg-brand p-2 text-base font-semibold text-white md:px-4 md:py-2">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose className="mb-6" html={product.descriptionHtml} />
      ) : null}

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
}
