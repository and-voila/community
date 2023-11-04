import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

import { env } from '@/env.mjs';
import { db } from '@/app/lib/db';
import { stripe } from '@/app/lib/stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET!,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const courseId = session?.metadata?.courseId;

  if (event.type === 'checkout.session.completed') {
    if (session.subscription) {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string,
      );

      if (!userId) {
        return new NextResponse('User id is required', { status: 400 });
      }

      const user = await db.user.findUnique({ where: { id: userId } });
      if (!user) {
        return new NextResponse('User not found', { status: 400 });
      }

      await db.userSubscription.create({
        data: {
          userId: userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000,
          ),
        },
      });
    } else {
      if (!userId || !courseId) {
        return new NextResponse('Webhook Error: Missing metadata', {
          status: 400,
        });
      }

      await db.purchase.create({
        data: {
          courseId: courseId,
          userId: userId,
        },
      });
    }
  } else if (event.type === 'invoice.payment_succeeded') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );

    const userSubscription = await db.userSubscription.findUnique({
      where: { stripeSubscriptionId: subscription.id },
    });

    if (!userSubscription) {
      await db.userSubscription.create({
        data: {
          userId: session?.metadata?.userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000,
          ),
        },
      });
    } else {
      await db.userSubscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000,
          ),
        },
      });
    }
  } else {
    return new NextResponse(
      `Webhook Error: Unhandled event type ${event.type}`,
      { status: 200 },
    );
  }

  return new NextResponse(null, { status: 200 });
}
