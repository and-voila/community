import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs';

import { bestPlan } from '@/app/config/subscriptions';
import { db } from '@/app/lib/db';
import { stripe } from '@/app/lib/stripe';
import { absoluteUrl } from '@/app/lib/utils';

const settingsUrl = absoluteUrl('/settings');

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const userSubscription = await db.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      discounts: [
        {
          coupon: process.env.STRIPE_COUPON_ID,
        },
      ],
      billing_address_collection: 'auto',
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price: bestPlan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
