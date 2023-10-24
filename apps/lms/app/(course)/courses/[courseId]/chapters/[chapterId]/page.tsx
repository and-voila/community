import { redirect } from 'next/navigation';
import { getChapter } from '@/actions/get-chapter';
import { auth } from '@clerk/nextjs';
import { Separator } from '@ui/components/ui/separator';
import { FileIcon } from '@ui/index';

import { checkSubscription } from '@/lib/subscription';
import { Banner } from '@/components/banner';
import { Container } from '@/components/container';
import { Preview } from '@/components/preview';
import { SubscriptionButton } from '@/components/subscription-button';

import { CourseEnrollButton } from './_components/course-enroll-button';
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

  const isPro = await checkSubscription();

  if (!chapter || !course) {
    return redirect('/');
  }

  const isLocked = !course.isFree && !isPro && !purchase;

  // ...

  {
    !isLocked ? (
      <CourseProgressButton
        chapterId={params.chapterId}
        courseId={params.courseId}
        nextChapterId={nextChapter?.id}
        isCompleted={!!userProgress?.isCompleted}
      />
    ) : (
      !course.isFree && (
        <CourseEnrollButton courseId={params.courseId} price={course.price!} />
      )
    );
  }
  const completeOnEnd = (!!isPro || !!purchase) && !userProgress?.isCompleted;

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
          {isLocked && (
            <Banner
              variant="warning"
              label="Access this playbook for $12 or become a paid member and enjoy full access to our community, playbooks, and AI tools."
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
              isLocked={isLocked}
              completeOnEnd={completeOnEnd}
            />
          </div>
          <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
            <div className="flex flex-col items-center justify-between p-4 md:flex-row">
              <h2 className="mb-2 flex-grow font-display text-lg">
                {chapter.title}
              </h2>
              {!isLocked ? (
                <CourseProgressButton
                  chapterId={params.chapterId}
                  courseId={params.courseId}
                  nextChapterId={nextChapter?.id}
                  isCompleted={!!userProgress?.isCompleted}
                />
              ) : (
                !course.isFree && (
                  <div className="flex flex-row gap-x-4 items-center">
                    <CourseEnrollButton
                      courseId={params.courseId}
                      price={course.price!}
                    />
                    or
                    <SubscriptionButton isPro={isPro} size="sm" />
                  </div>
                )
              )}
            </div>
            <Separator />
            {!isLocked ? (
              <>
                <Preview value={chapter.description!} />
                {!!attachments.length && (
                  <>
                    <Separator />
                    <div className="p-4">
                      {attachments.length > 0 && (
                        <div className="mt-16 flex items-center gap-x-2">
                          <h2 className="font-display text-lg">
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
                          <FileIcon />
                          <p className="ml-2 line-clamp-1">{attachment.name}</p>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div>
                <Preview value={course.description!} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChapterIdPage;
