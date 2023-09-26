import Link from 'next/link';
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CrumpledPaperIcon,
  MixIcon,
  RocketIcon,
} from 'ui';

import { FadeIn } from '@/components/fade-in';
import Highlighter, { HighlighterItem } from '@/components/highlighter';
import SectionIntro from '@/components/section-intro';
import { H4 } from '@/components/typography';
import { cn } from '@/lib/utils';

type CardData = {
  title: string;
  description: string;
  content: string;
  link: string;
  cta: string;
  icon: React.ElementType;
  ariaLabel: string;
};

type CardProps = React.ComponentProps<typeof Card>;

const LandingRelief: React.FC<CardProps> = () => {
  const cards: CardData[] = [
    {
      title: 'Just starting out?',
      description: 'Preheat success, avoid rookie missteps.',
      content:
        'We spotlight pitfalls before you stumble so you can start strong. Get field-tested insights that provide a solid foundation.',
      link: '/shop',
      cta: 'Kickstart now',
      icon: RocketIcon,
      ariaLabel:
        'Save time, money, and hassle on your new project by getting a roast from us first.',
    },
    {
      title: 'In the thick of it?',
      description: 'Reignite momentum, reduce frustration.',
      content:
        'Get an expert assist to blast through plateaus. Break free from wheel-spinning and back on the fast track.',
      link: '/shop',
      cta: 'Break free',
      icon: CrumpledPaperIcon,
      ariaLabel: 'Get your project back on track with a roast from us.',
    },
    {
      title: 'Mulling a pivot?',
      description: 'Weigh the pros and cons with data, not drama.',
      content:
        "Get real talk to decide if you should stick or twist. Make the call with confidence knowing we've got your back.",
      link: '/shop',
      cta: 'Decide wisely',
      icon: MixIcon,
      ariaLabel:
        'Identify priorities and make the right call with a roast from us.',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <SectionIntro
        eyebrow="Expert guidance for every situation"
        heading="No more guessing games"
        description="Whether you're just starting, stuck in the middle, or eyeing a pivot, our roasts deliver tailored action plans to ignite results."
      />
      <FadeIn>
        <Highlighter className="group mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <HighlighterItem key={index}>
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-primary-foreground">
                <Card className="flex flex-col border-0 bg-primary-foreground">
                  <CardHeader className="gap-4">
                    <H4 as="h3">{card.title}</H4>
                    <CardDescription className="text-lg text-muted-foreground">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-base text-muted-foreground">
                      {card.content}
                    </div>
                  </CardContent>
                  <CardFooter className="mb-2 mt-4">
                    <Link
                      href={card.link}
                      className={cn(
                        buttonVariants({ variant: 'custom', size: 'lg' }),
                        'w-full',
                      )}
                      aria-label={card.ariaLabel}
                    >
                      {card.cta}
                      <span className="ml-2" aria-hidden="true">
                        <card.icon />
                      </span>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </HighlighterItem>
          ))}
        </Highlighter>
      </FadeIn>
    </section>
  );
};

export default LandingRelief;
