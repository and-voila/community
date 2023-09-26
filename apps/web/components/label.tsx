import clsx from 'clsx';

import Price from '@/components/price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom',
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label',
        {
          'lg:px-20 lg:pb-[35%]': position === 'center',
        },
      )}
    >
      <div className="flex items-center rounded-xl border border-border bg-background p-1 text-xs font-semibold text-foreground backdrop-blur-md md:text-sm">
        <h3 className="mr-2 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none rounded-lg bg-brand px-3 py-1 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
