import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { Banner } from '@/components/banner';
import { IconBadge } from '@/components/icon-badge';
import { Icons } from '@/components/icons';

import { AccessForm } from './_components/access-form';
import { Actions } from './_components/actions';
import { AttachmentForm } from './_components/attachment-form';
import { CategoryForm } from './_components/category-form';
import { ChaptersForm } from './_components/chapters-form';
import { DescriptionForm } from './_components/description-form';
import { ImageForm } from './_components/image-form';
import { TitleForm } from './_components/title-form';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: 'asc',
        },
      },
      attachments: {
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  if (!course) {
    return redirect('/');
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.categoryId,
    course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="mx-auto max-w-3xl bg-background pb-24 dark:bg-[#242629] lg:pb-32">
      {!course.isPublished && (
        <Banner label="This course is not published yet." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-display text-3xl">Course setup</h1>
            <span className="text-base text-muted-foreground">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          />
        </div>
        <div className="mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Icons.magic} />
              <h2 className="font-display text-lg">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
            <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="mt-16 space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Icons.activity} />
                <h2 className="font-display text-lg">Course chapters</h2>
              </div>
              <ChaptersForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="mt-16 flex items-center gap-x-2">
                <IconBadge icon={Icons.locked} />
                <h2 className="font-display text-lg">Course access</h2>
              </div>
              <AccessForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="mt-16 flex items-center gap-x-2">
                <IconBadge icon={Icons.file} />
                <h2 className="font-display text-lg">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
