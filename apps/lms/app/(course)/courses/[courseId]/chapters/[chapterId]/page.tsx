import { redirect } from 'next/navigation';
import { getChapter } from '@/actions/get-chapter';
import { auth } from '@clerk/nextjs';
import { Separator } from '@ui/components/ui/separator';

import { Banner } from '@/components/banner';
import { Container } from '@/components/container';
import { Icons } from '@/components/icons';
import { Preview } from '@/components/preview';

import { CourseProgressButton } from './_components/course-progress-button';
import { VideoPlayer } from './_components/video-player';

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect('/');
  }

  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      <Container>
        <div className="mx-auto flex flex-col pb-20">
          {userProgress?.isCompleted && (
            <Banner
              variant="success"
              label="You already completed this chapter."
            />
          )}
          <div className="py-4">
            <VideoPlayer
              chapterId={params.chapterId}
              title={chapter.title}
              courseId={params.courseId}
              nextChapterId={nextChapter?.id}
              // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
              playbackId={muxData?.playbackId!}
              completeOnEnd={completeOnEnd}
            />
          </div>
          <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
            <div className="flex flex-col items-center justify-between p-4 lg:flex-row space-y-4 lg:space-y-0">
              <h2 className="mb-2 flex-grow font-display tracking-tight text-3xl">
                {chapter.title}
              </h2>
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.id}
                isCompleted={!!userProgress?.isCompleted}
              />
            </div>
            <Separator />
            <div>
              <Preview value={chapter.description!} />
            </div>
            {!!attachments.length && (
              <>
                <Separator />
                <div className="p-4">
                  {attachments.length > 0 && (
                    <div className="mt-16 flex items-center gap-x-2">
                      <h2 className="font-display tracking-tight text-lg">
                        Resources & Attachments
                      </h2>
                    </div>
                  )}
                  {attachments.map((attachment) => (
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={attachment.id}
                      className="mt-8 flex w-full items-center rounded-md border p-3 text-foreground hover:underline"
                    >
                      <Icons.file />
                      <p className="ml-2 line-clamp-1">{attachment.name}</p>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChapterIdPage;
