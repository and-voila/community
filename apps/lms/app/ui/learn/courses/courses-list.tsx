import { Category, Course } from '@prisma/client';

import { CourseCard } from '@/app/ui/learn/courses/course-card';

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
  isPaidMember: boolean;
  purchased: boolean;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

const getLayoutType = (index: number, layoutPattern: string[][]) => {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return layoutPattern[row % layoutPattern.length][col];
};

export const CoursesList = ({ items }: CoursesListProps) => {
  const layoutPattern = [
    ['default', 'default', 'half', 'half'],
    ['half', 'half', 'default', 'default'],
    ['half', 'half', 'half', 'half'],
    ['default', 'default', 'default', 'default'],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const layoutType = getLayoutType(index, layoutPattern);
          const displayImage = layoutType === 'default';
          const cardClasses = displayImage ? 'row-span-2' : 'row-span-1';

          return (
            <div key={item.id} className={cardClasses}>
              <CourseCard
                id={item.id}
                title={item.title}
                preview={item.preview}
                imageUrl={item.imageUrl}
                price={item.price}
                progress={item.progress}
                category={item.category.name}
                displayImage={displayImage}
                isPaidMember={item.isPaidMember}
                purchased={item.purchased}
              />
            </div>
          );
        })}
      </div>
      {items.length === 0 && (
        <div className="mt-10 text-center text-sm text-muted-foreground">
          You haven&apos;t started a playbook yet.
        </div>
      )}
    </div>
  );
};
