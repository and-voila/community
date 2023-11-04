import Image from 'next/image';
import { redirect } from 'next/navigation';
import { COURSE_DEFAULT_PRICE } from '@/constants';
import { Separator } from '@ui/index';

import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { Banner } from '@/app/ui/banner';
import { Container } from '@/app/ui/container';
import { CourseEnrollButton } from '@/app/ui/learn/courses/course-enroll-button';
import { StartCourseButton } from '@/app/ui/learn/courses/start-course-button';
import { Preview } from '@/app/ui/preview';
import { SubscriptionButton } from '@/app/ui/subscription-button';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const user = await getCurrentUser();
  const userId = user?.id;
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
    cacheStrategy: {
      ttl: 15,
      swr: 30,
    },
  });

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
              width={1200}
              height={630}
              role="img"
              aria-label={`A featured image of an anthropomorphic cat representing ${course.title}`}
            />
            <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
              <div className="flex flex-col items-center justify-between p-4 lg:flex-row">
                <h2 className="mb-2 font-display tracking-tight text-3xl">
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
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h2 className="text-2xl md:text-3xl font-display tracking-tight text-foreground">
                    {course.title}
                  </h2>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0 w-full sm:w-auto">
                  <StartCourseButton
                    chapterId={course.chapters[0].id}
                    courseId={course.id}
                    isStarted={isStarted}
                    firstChapterId={course.chapters[0].id}
                  />
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <Preview value={course.description!} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return redirect(
      `/learn/courses/${course.id}/chapters/${course.chapters[0].id}`,
    );
  }
};

export default CourseIdPage;
