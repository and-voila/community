import Link from 'next/link';
import {
  ArrowRightIcon,
  EnvelopeOpenIcon,
  HomeIcon,
  PaperPlaneIcon,
  QuestionMarkCircledIcon,
} from 'ui';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import PageIntro from '@/components/page-intro';
import { H4 } from '@/components/typography';

interface ContentProps {
  icon: (props: { className?: string }) => JSX.Element;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkAriaLabel: string;
}

const content: ContentProps[] = [
  {
    icon: (props) => <QuestionMarkCircledIcon {...props} />,
    title: 'Technical support',
    description:
      "No worries. We'll do what we can to help. Just reach out and explain the issue you're having and we'll get back to you fast.",
    linkText: 'Get support now',
    linkHref: 'mailto:hi@bril.la?subject=Support%20Request',
    linkAriaLabel: 'Email And Voila Support',
  },
  {
    icon: (props) => <EnvelopeOpenIcon {...props} />,
    title: 'Sales support',
    description:
      "Have a pre-sales question about a Roast or our Unlimited package? Awesome! Drop us a line and we'll be in touch soon.",
    linkText: 'Contact sales',
    linkHref: 'mailto:hi@bril.la?subject=Sales%20Inquiry',
    linkAriaLabel: 'Email And Voila Sales',
  },
  {
    icon: (props) => <PaperPlaneIcon {...props} />,
    title: 'General questions',
    description:
      "Did we miss something on our FAQ? Need something else? Send us a message and we'll get back to you.",
    linkText: 'Contact us',
    linkHref: 'mailto:hi@bril.la?subject=General%20Inquiry',
    linkAriaLabel: 'Contact us',
  },
];

const ContactDetails: React.FC = () => {
  return (
    <section className="isolate py-24 sm:py-32">
      <PageIntro
        eyebrow="Here to Help"
        heading="Contact us"
        description="We're a 100% remote team. Think of us as your digital marketing baristas—brewing up roasts from the City of Angels to the far corners of the internet."
      />
      <FadeInStagger className="mx-auto mt-20 max-w-lg space-y-16">
        {content.map((item, index) => (
          <FadeIn key={index} className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground">
              <item.icon className="h-6 w-6 text-brand" aria-hidden="true" />
            </div>
            <div>
              <H4 as="h2" className="text-foreground">
                {item.title}
              </H4>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
              <div className="mt-4">
                <Link
                  href={item.linkHref}
                  aria-label={`Click to ${item.linkText}`}
                  className="group mt-4 flex items-center text-base font-medium text-foreground transition duration-150 ease-in-out hover:text-muted-foreground"
                >
                  {item.linkText}
                  {''}
                  <div className="ml-2 text-brand transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 dark:text-brand">
                    <ArrowRightIcon aria-hidden="true" />
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
        <FadeIn className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground">
            <HomeIcon className="h-6 w-6 text-brand" aria-hidden="true" />
          </div>
          <div>
            <H4 as="h2" className="text-foreground">
              Send us Tacos?
            </H4>
            <p className="mt-2 text-muted-foreground">
              Yes please! We&apos;d love that. You can have them delivered to us
              hot and fresh at:
            </p>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <div>
                <div className="sr-only">Address</div>
                <div>
                  BRIL.LA, LLC.
                  <br />
                  1370 N. St. Andrews Place
                  <br />
                  Los Angeles, CA 90028
                </div>
              </div>
              <div>
                <div className="sr-only">Telephone</div>
                <div>
                  <Link
                    className="font-medium text-brand hover:underline hover:underline-offset-4"
                    href="tel:+1 (555) 234-5678"
                    aria-label="Call And Voila by BRIL.LA on the telephone"
                  >
                    <span role="img" aria-label="Telephone emoji">
                      📞
                    </span>{' '}
                    (415) 727-4552
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
    </section>
  );
};

export default ContactDetails;
