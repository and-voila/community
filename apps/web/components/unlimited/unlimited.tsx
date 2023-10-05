import FaqComponent from '@ui/components/faq';
import { cn } from '@ui/index';
import { FadeIn, FadeInStagger } from '@ui/index';
import Link from 'next/link';
import {
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CheckIcon,
  Cross2Icon,
} from 'ui';

import PageIntro from '@/components/page-intro';
import { unlimitedFaqs } from '@/components/unlimited/unlimited-faq-data';

interface Tier {
  name: string;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: { [frequency: string]: string };
  buttonCta: string;
  frequency: string;
  mainFeatures: string[];
}

interface Feature {
  name: string;
  tiers: { [key: string]: boolean | string };
}

interface Section {
  name: string;
  features: Feature[];
}

interface Pricing {
  tiers: Tier[];
  sections: Section[];
}

const pricing: Pricing = {
  tiers: [
    {
      name: 'Hot',
      id: 'tier-hot',
      href: 'https://buy.stripe.com/3cs9DLg7n76H37yaEG',
      featured: false,
      description:
        'Turn up the heat on your marketing. Get sizzling strategies and execution, one request at a time, all in a 2-day blaze. Flexibility and delight, guaranteed.',
      price: { monthly: '$1,995' },
      buttonCta: 'Start with Hot 🔥',
      frequency: 'monthly',
      mainFeatures: [
        'Request anything',
        'Strategic marketing guidance',
        'Expert execution',
        'One request at a time',
        '2 business day turnaround',
        'Full copyright ownership',
        'Human-generated',
        'As many brands as you can bring',
        'Bring the whole team',
        'Access to premium assets',
        'Convenient credit card payments',
        'Pause or cancel anytime',
      ],
    },
    {
      name: 'Hotter',
      id: 'tier-hotter',
      href: 'https://buy.stripe.com/bIYdU108pgHh4bC5kl',
      featured: true,
      description:
        'Your marketing red-hot. Double the requests, half the wait. Same exceptional strategy and execution, turbocharged for your needs.',
      price: { monthly: '$3,995' },
      buttonCta: 'Get results with Hotter 🔥🔥',
      frequency: 'monthly',
      mainFeatures: [
        'All benefits of Hot',
        'Skip the line with priority queue',
        'Two requests at a time',
        '2 business day turnaround',
      ],
    },
    {
      name: 'Hottest',
      id: 'tier-hottest',
      href: 'https://buy.stripe.com/aEUg2908pcr1gYo7ss',
      featured: false,
      description:
        "Double the action, double the results. Enjoy all the benefits of 'Hotter', but with the ability to submit two requests at a time. Ideal for scaling businesses that need more attention, more quickly.",
      price: { monthly: '$7,995' },
      buttonCta: 'Crush it with Hottest 🔥🔥🔥',
      frequency: 'monthly',
      mainFeatures: [
        'All benefits of Hotter',
        'Skip the line with priority queue',
        'Four requests at a time',
        '1 business day turnaround',
      ],
    },
  ],
  sections: [
    {
      name: 'Unlimited creativity & execution',
      features: [
        {
          name: 'Design and build anything',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Branding & identity',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Websites & landing pages',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Apps & custom software',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'SEO & content strategy',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'User experience design',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Data analytics & insights',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Custom emails & campaigns',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Creative assets',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Social media management',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Copywriting & content creation',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'API integrations',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'E-commerce solutions',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Privacy & compliance',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
      ],
    },
    {
      name: 'Business efficiency',
      features: [
        {
          name: 'Multiple brands',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Team inclusion',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Premium assets',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
      ],
    },
    {
      name: 'Custom support & personalization',
      features: [
        {
          name: 'Personalized Q/A via Discord',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Same-day response',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Priority queue',
          tiers: { Hot: false, Hotter: true, Hottest: true },
        },
        {
          name: 'Same-day turnaround',
          tiers: { Hot: false, Hotter: false, Hottest: true },
        },
      ],
    },
    {
      name: 'Community & learning',
      features: [
        {
          name: 'Lifetime community access',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Access to classes',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
        {
          name: 'Access to premium content',
          tiers: { Hot: true, Hotter: true, Hottest: true },
        },
      ],
    },
  ],
};

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Unlimited() {
  return (
    <main className="py-24 sm:py-32">
      <section>
        {/* Pricing section */}
        <PageIntro
          eyebrow="Whatever you can dream of"
          heading="Unlimited design and build"
          level="h2"
          as="h1"
          description="Whether you're just dipping your toes or ready to dive into the deep end, we have a membership tier designed to fuel your marketing endeavors."
        />
        <div className="flow-root py-16 lg:pb-0">
          <FadeInStagger className="mx-auto">
            <FadeIn className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              {pricing.tiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'z-10 scale-105 bg-primary-foreground shadow-xl ring-1 ring-border'
                      : 'bg-background ring-1 ring-border lg:pb-14 lg:ring-0',
                    'relative mt-10 rounded-2xl',
                  )}
                >
                  <CardHeader>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                      {tier.name}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className="mt-2 flex items-center gap-x-4">
                        <p
                          className={classNames(
                            tier.featured
                              ? 'text-foreground'
                              : 'text-muted-foreground',
                            'font-display text-3xl',
                          )}
                        >
                          {tier.price[tier.frequency]}
                        </p>
                        <div className="text-sm leading-5">
                          <p
                            className={
                              tier.featured
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                            }
                          >
                            USD
                          </p>
                          <p
                            className={
                              tier.featured
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                            }
                          >{`Billed ${tier.frequency}`}</p>
                        </div>
                      </div>
                      <Link
                        href={tier.href}
                        className={cn(
                          buttonVariants({
                            variant: tier.featured ? 'default' : 'secondary',
                            size: 'lg',
                          }),
                          'w-full',
                        )}
                        aria-label={`Get unlimited design and build to skyrocket results with ${tier.name}`}
                        aria-describedby={tier.id}
                      >
                        {tier.buttonCta}{' '}
                      </Link>
                    </div>
                    <div className="mt-8 flow-root sm:mt-10">
                      <ul
                        role="list"
                        className={classNames(
                          tier.featured
                            ? 'divide-border border-border text-foreground'
                            : 'divide-border border-border text-muted-foreground',
                          '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 lg:text-base',
                        )}
                      >
                        {tier.mainFeatures.map((mainFeature) => (
                          <li key={mainFeature} className="flex gap-x-3 py-2">
                            <CheckIcon
                              className={classNames(
                                tier.featured
                                  ? 'text-brand/70'
                                  : 'text-muted-foreground',
                                'h-6 w-5 flex-none',
                              )}
                              aria-hidden="true"
                            />
                            {mainFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </FadeIn>
          </FadeInStagger>
        </div>
        <FadeIn className="relative lg:pt-14">
          <div className="mx-auto py-24 sm:py-32">
            {/* Feature comparison (up to lg) */}
            <section
              aria-labelledby="mobile-comparison-heading"
              className="lg:hidden"
            >
              <h2 id="mobile-comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="mx-auto max-w-2xl space-y-16">
                {pricing.tiers.map((tier) => (
                  <div key={tier.id} className="border-t border-border">
                    <div
                      className={classNames(
                        tier.featured ? 'border-border' : 'border-transparent',
                        '-mt-px w-72 border-t-2 pt-10 md:w-80',
                      )}
                    >
                      <h3
                        className={classNames(
                          tier.featured
                            ? 'text-brand'
                            : 'text-muted-foreground',
                          'font-display text-xl leading-6',
                        )}
                      >
                        {tier.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-foreground">
                        {tier.description}
                      </p>
                    </div>

                    <div className="mt-10 space-y-10">
                      {pricing.sections.map((section) => (
                        <div key={section.name}>
                          <h4 className="font-display text-lg leading-6 text-foreground">
                            {section.name}
                          </h4>
                          <div className="relative mt-6">
                            {/* Fake card background */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-primary-foreground shadow-sm sm:block"
                            />
                            <div
                              className={classNames(
                                tier.featured
                                  ? 'ring-1 ring-brand'
                                  : 'ring-1 ring-border',
                                'relative rounded-lg bg-primary-foreground shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                              )}
                            >
                              <dl className="divide-y divide-border text-sm leading-6">
                                {section.features.map((feature) => (
                                  <div
                                    key={feature.name}
                                    className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                  >
                                    <dt className="pr-4 text-muted-foreground">
                                      {feature.name}
                                    </dt>
                                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                      {typeof feature.tiers[tier.name] ===
                                      'string' ? (
                                        <span
                                          className={
                                            tier.featured
                                              ? 'font-semibold text-brand'
                                              : 'text-muted-foreground'
                                          }
                                        >
                                          {feature.tiers[tier.name]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name] === true ? (
                                            <CheckIcon
                                              className="mx-auto h-5 w-5 text-brand/70"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <Cross2Icon
                                              className="mx-auto h-5 w-5 text-muted-foreground"
                                              aria-hidden="true"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name] === true
                                              ? 'Yes'
                                              : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>

                            {/* Fake card border */}
                            <div
                              aria-hidden="true"
                              className={classNames(
                                tier.featured
                                  ? 'ring-1 ring-brand'
                                  : 'ring-1 ring-border',
                                'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Feature comparison (lg+) */}
            <FadeIn>
              <section
                aria-labelledby="comparison-heading"
                className="hidden lg:block"
              >
                <h2 id="comparison-heading" className="sr-only">
                  Feature comparison
                </h2>

                <div className="grid grid-cols-4 gap-x-8 border-t border-border before:block">
                  {pricing.tiers.map((tier) => (
                    <div key={tier.id} aria-hidden="true" className="-mt-px">
                      <div
                        className={classNames(
                          tier.featured ? 'border-brand' : 'border-transparent',
                          'border-t-2 pt-10',
                        )}
                      >
                        <p
                          className={classNames(
                            tier.featured
                              ? 'text-brand'
                              : 'text-muted-foreground',
                            'font-display text-lg leading-6 lg:text-xl',
                          )}
                        >
                          {tier.name}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground lg:mt-2 lg:text-base">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="-mt-6 space-y-16">
                  {pricing.sections.map((section) => (
                    <div key={section.name}>
                      <h3 className="font-display text-base leading-6 text-foreground lg:text-lg">
                        {section.name}
                      </h3>
                      <div className="relative -mx-8 mt-10">
                        {/* Fake card backgrounds */}
                        <div
                          className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                          aria-hidden="true"
                        >
                          <div className="h-full w-full rounded-lg bg-primary-foreground shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-primary-foreground shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-primary-foreground shadow-sm" />
                        </div>

                        <table className="relative w-full border-separate border-spacing-x-8">
                          <thead>
                            <tr className="text-left">
                              <th scope="col">
                                <span className="sr-only">Feature</span>
                              </th>
                              {pricing.tiers.map((tier) => (
                                <th key={tier.id} scope="col">
                                  <span className="sr-only">
                                    {tier.name} tier
                                  </span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.features.map((feature, featureIdx) => (
                              <tr key={feature.name}>
                                <th
                                  scope="row"
                                  className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-muted-foreground lg:text-base"
                                >
                                  {feature.name}
                                  {featureIdx !==
                                  section.features.length - 1 ? (
                                    <div className="absolute inset-x-8 mt-3 h-px bg-border" />
                                  ) : null}
                                </th>
                                {pricing.tiers.map((tier) => (
                                  <td
                                    key={tier.id}
                                    className="relative w-1/4 px-4 py-0 text-center"
                                  >
                                    <span className="relative h-full w-full py-3">
                                      {typeof feature.tiers[tier.name] ===
                                      'string' ? (
                                        <span
                                          className={classNames(
                                            tier.featured
                                              ? 'font-semibold text-brand'
                                              : 'text-muted-foreground',
                                            'text-sm leading-6',
                                          )}
                                        >
                                          {feature.tiers[tier.name]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name] === true ? (
                                            <CheckIcon
                                              className="mx-auto h-5 w-5 text-brand/70"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <Cross2Icon
                                              className="mx-auto h-5 w-5 text-foreground"
                                              aria-hidden="true"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name] === true
                                              ? 'Yes'
                                              : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div
                          className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                          aria-hidden="true"
                        >
                          {pricing.tiers.map((tier) => (
                            <div
                              key={tier.id}
                              className={classNames(
                                tier.featured
                                  ? 'ring-1 ring-brand'
                                  : 'ring-1 ring-border',
                                'rounded-lg',
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>
        </FadeIn>
        <FaqComponent faqs={unlimitedFaqs} />
      </section>
    </main>
  );
}
