'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@ui/components/ui/input';
import { LucideReact } from '@ui/index';
import qs from 'query-string';

import { useDebounce } from '@/hooks/use-debounce';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get('categoryId');

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);

  return (
    <div className="relative flex items-center pl-4">
      <LucideReact.Search className="absolute left-6 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full rounded-lg bg-white pl-9 focus-visible:ring-ring dark:bg-secondary md:w-[300px]"
        placeholder="Search for a course"
      />
    </div>
  );
};
