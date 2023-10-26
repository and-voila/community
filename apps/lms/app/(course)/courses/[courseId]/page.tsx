import Image from 'next/image';
import { redirect } from 'next/navigation';
import { COURSE_DEFAULT_PRICE } from '@/constants';
import { auth } from '@clerk/nextjs';
import { Separator } from '@ui/index';

import { db } from '@/lib/db';
import { checkSubscription } from '@/lib/subscription';
import { Banner } from '@/components/banner';
import { Container } from '@/components/container';
import { Preview } from '@/components/preview';
import { SubscriptionButton } from '@/components/subscription-button';

import { CourseEnrollButton } from './chapters/[chapterId]/_components/course-enroll-button';
import { StartCourseButton } from './chapters/[chapterId]/_components/start-course-button';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
      },
      purchases: {
        where: {
          userId: userId,
        },
      },
    },
  });

  // eslint-disable-next-line no-console
  console.log('Chapters:', course?.chapters);

  const userProgress = await db.userProgress.findFirst({
    where: {
      userId: userId,
      chapterId: course.chapters[0].id,
    },
  });

  if (!course) {
    return redirect('/');
  }

  const purchase = course?.purchases[0];

  const isPaidMember = await checkSubscription();

  const isLocked = course.price !== 0 && !(isPaidMember || purchase);

  const isStarted = userProgress?.isStarted || false;

  if (isLocked) {
    return (
      <>
        <Container>
          <div className="mx-auto flex flex-col pb-20">
            {' '}
            <Banner
              variant="warning"
              label={`You can buy this playbook for $${COURSE_DEFAULT_PRICE} or upgrade to get full access to the And Voila ecosystem.`}
            />
            <Image
              className="w-full py-4 shadow-md grayscale hover:grayscale-0 transition duration-200"
              src={course.imageUrl}
              alt={`A featured image of an anthropomorphic cat representing ${course.title}`}
              width={630}
              height={1200}
              role="img"
              aria-label={`A featured image of an anthropomorphic cat representing ${course.title}`}
            />
            <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
              <div className="flex flex-col items-center justify-between p-4 lg:flex-row">
                <h2 className="mb-2 flex-grow font-display text-3xl">
                  {course.title}
                </h2>
                <div className="lg:p-6 flex flex-col sm:py-0 lg:flex-row gap-x-4 items-center w-full lg:w-auto py-4 space-y-6 lg:space-y-0">
                  <CourseEnrollButton
                    courseId={params.courseId}
                    price={course.price!}
                  />
                  <SubscriptionButton isPaidMember={isPaidMember} size="sm" />
                </div>
              </div>
              <Separator />
              <div>
                <Preview value={course.description!} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  } else if (!isStarted && !isLocked) {
    return (
      <>
        <Container>
          <div className="mx-auto flex flex-col pb-20">
            <Image
              className="w-full py-4 shadow-md grayscale hover:grayscale-0 transition duration-200"
              src={course.imageUrl}
              alt={`A featured image of an anthropomorphic cat representing ${course.title}`}
              width={630}
              height={1200}
              role="img"
              aria-label={`A featured image of an anthropomorphic cat representing ${course.title}`}
            />
            <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
              <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                <h2 className="mb-2 flex-grow font-display text-lg">
                  {course.title}
                </h2>
                <div className="flex flex-row gap-x-4 items-center">
                  <StartCourseButton
                    chapterId={course.chapters[0].id}
                    courseId={course.id}
                    isStarted={isStarted}
                    firstChapterId={course.chapters[0].id}
                  />
                </div>
              </div>
              <Separator />
              <div>
                <Preview value={course.description!} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
  }
};

export default CourseIdPage;
