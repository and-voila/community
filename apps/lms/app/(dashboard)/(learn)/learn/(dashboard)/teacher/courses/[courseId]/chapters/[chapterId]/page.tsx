import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@ui/index';

import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { isTeacher } from '@/app/lib/teacher';
import { Banner } from '@/app/ui/banner';
import { IconBadge } from '@/app/ui/icon-badge';
import { Icons } from '@/app/ui/icons';
import { ChapterActions } from '@/app/ui/learn/teacher/chapters/chapter-actions';
import { ChapterDescriptionForm } from '@/app/ui/learn/teacher/chapters/chapter-description-form';
import { ChapterTitleForm } from '@/app/ui/learn/teacher/chapters/chapter-title-form';
import { ChapterVideoForm } from '@/app/ui/learn/teacher/chapters/chapter-video-form';

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect('/');
  }

  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="mx-auto max-w-3xl bg-background pb-24 dark:bg-[#242629] lg:pb-32">
      {!chapter.isPublished && (
        <Banner
          variant="warning"
          label="This play ain't published yet. No one can take it until it is."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link href={`/learn/teacher/courses/${params.courseId}`}>
              <Button variant="outline" className="mb-6">
                <Icons.arrowLeft className="mr-2 h-4 w-4 text-brand" />
                Back to playbook setup
              </Button>
            </Link>
            <div className="mt-6 flex w-full items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <h1 className="font-display tracking-tight text-2xl">
                  Create a play
                </h1>
                <span className="text-base text-muted-foreground">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon="magic" />
                <h2 className="font-display tracking-tight text-xl">
                  Customize your play
                </h2>
              </div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescriptionForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
          <div>
            <div className="mt-16 flex items-center gap-x-2">
              <IconBadge icon="youtube" />
              <h2 className="font-display tracking-tight text-xl">
                Add a video
              </h2>
            </div>
            <ChapterVideoForm
              initialData={chapter}
              chapterId={params.chapterId}
              courseId={params.courseId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
