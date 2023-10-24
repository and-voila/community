import { auth } from '@clerk/nextjs';

import { db } from './db';
import { isTeacher } from './teacher';

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (isTeacher(userId)) {
    return { isPaidMember: true };
  }

  if (!userId) {
    return { isPaidMember: false };
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
    cacheStrategy: {
      ttl: 604800,
      swr: 10,
    },
  });

  if (!userSubscription) {
    return { isPaidMember: false };
  }

  const isValid =
    userSubscription.stripePriceId &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return { isPaidMember: !!isValid };
};
