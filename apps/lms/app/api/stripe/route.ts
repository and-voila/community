import { NextResponse } from 'next/server';

import { bestPlan } from '@/app/config/subscriptions';
import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { stripe } from '@/app/lib/stripe';
import { absoluteUrl } from '@/app/lib/utils';

const settingsUrl = absoluteUrl('/settings');

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const user = await getCurrentUser();
    const userId = user?.id;

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
      customer_email: user.email,
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
