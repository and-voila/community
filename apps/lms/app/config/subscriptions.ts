import { SubscriptionPlan } from '@/app/lib/types';

export const goodPlan: SubscriptionPlan = {
  name: 'Good',
  description:
    'The Good plan is free for everyone. It includes limited access to our premium Discord community, a curated list of free clasess, and 30 AI-assist tokens.',
  stripePriceId: '',
};

export const bestPlan: SubscriptionPlan = {
  name: 'Best',
  description:
    'The Best plan includes full-acess to our premium Discord community, priority support from the mods, all of our classes, and 7,500 AI-assist tokens.',
  stripePriceId: process.env.STRIPE_BEST_MONTHLY_PRICE_ID || '',
};
