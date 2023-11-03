'use client';

import { Suspense } from 'react';

import { CategoryItemSkeleton } from '../../skeletons';
import { CategoryItem } from './category-item';
import { Category } from '.prisma/client';

interface CategoriesProps {
  items: Category[];
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto p-2">
      <Suspense fallback={<CategoryItemSkeleton />}>
        {items.map((item) => (
          <CategoryItem key={item.id} label={item.name} value={item.id} />
        ))}
      </Suspense>
    </div>
  );
};
