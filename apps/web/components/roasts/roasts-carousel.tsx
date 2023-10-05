/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import 'swiper/css';

import { FadeIn } from '@ui/index';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ChatBubbleIcon,
  DesktopIcon,
  EnvelopeClosedIcon,
  EyeNoneIcon,
  FileTextIcon,
  GlobeIcon,
  LinkBreak1Icon,
} from 'ui';

import Highlighter, { HighlighterItem } from '@/components/highlighter';
import Particles from '@/components/particles';
import SectionIntro from '@/components/section-intro';
Swiper.use([Navigation]);

interface CarouselItem {
  title: string;
  description: string;
  cta: string;
  icon: JSX.Element;
  linkText: string;
  linkHref: string;
  ariaLabel: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Website stalling?',
    description:
      "Poor performance costs conversions. We'll dissect your site's speed and provide a detailed plan for you.",
    cta: 'Ready to Speed Up?',
    linkText: 'Roast My Website',
    icon: <GlobeIcon className="h-8 w-8" />,
    linkHref: '/shop/website',
    ariaLabel: 'Get a roast of your website from us.',
  },
  {
    title: 'Identity Crisis?',
    description:
      "A disjointed brand confuses customers. We'll scrutinize the important stuff and provide a clear alignment strategy.",
    cta: 'Need Brand Clarity?',
    linkText: 'Roast My Identity',
    icon: <EyeNoneIcon className="h-8 w-8" />,
    linkHref: '/shop/brand-identity',
    ariaLabel: 'Get a roast of your brand identity from us.',
  },
  {
    title: 'Landing Page Flopping?',
    description:
      "A weak landing page deters visitors. We'll examine it, highlight the issues, and provide a plan for you to fix it.",
    cta: 'Ready for Conversion?',
    linkText: 'Roast My Landing Page',
    icon: <DesktopIcon className="h-8 w-8" />,
    linkHref: '/shop/landing-page',
    ariaLabel: 'Get a roast of your landing page from us.',
  },
  {
    title: 'Content Falling Flat?',
    description:
      "Unengaging content repels customers. We'll critique your content so you to make it more attractive.",
    cta: 'Elevate Your Content?',
    linkText: 'Roast My Content',
    icon: <FileTextIcon className="h-8 w-8" />,
    linkHref: '/shop/content',
    ariaLabel: 'Get a roast of your marketing content from us.',
  },
  {
    title: 'SEO Struggles?',
    description:
      "Not on Page 1? You're missing out. We'll analyze your SEO, find the gaps, and provide a plan for you to fill them.",
    cta: 'Ready for Page 1?',
    linkText: 'Roast My SEO',
    icon: <LinkBreak1Icon className="h-8 w-8" />,
    linkHref: '/shop/seo',
    ariaLabel: 'Get a roast of your SEO from us.',
  },
  {
    title: 'Social Media Snooze?',
    description:
      "Social media should be engaging. We'll critique your content and provide a detailed plan for you to continue it.",
    cta: 'Time to Engage?',
    linkText: 'Roast My Social Media',
    icon: <BellIcon className="h-8 w-8" />,
    linkHref: '/shop/social-media',
    ariaLabel: 'Get a roast of your Social Media marketing from us.',
  },
  {
    title: 'Emails Gathering Dust?',
    description:
      "Unopened emails? We'll review your emails and provide a comprehensive plan for you to make them click-worthy.",
    cta: 'Boost Open Rates?',
    linkText: 'Roast My Email Marketing',
    icon: <EnvelopeClosedIcon className="h-8 w-8" />,
    linkHref: '/shop/email-marketing',
    ariaLabel: 'Get a roast of your email campaigns from us.',
  },
  {
    title: 'Messaging Muddled?',
    description:
      "Confused messaging loses customers. We'll dissect your messaging and provide a clear strategy for you to nail it.",
    cta: 'Clarify Your Message?',
    linkText: 'Roast My Messaging',
    icon: <ChatBubbleIcon className="h-8 w-8" />,
    linkHref: '/shop/messaging',
    ariaLabel: 'Get a roast of your brand messaging from us.',
  },
];

export default function LandingCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const carousel = new Swiper('.testimonials-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        eyebrow="Your Ambitions, Our Mission"
        heading="We make you look good"
        description="Our curated roasts are more than just feedback—they're your
          toolkit for marketing brilliance. From SEO to social media, we've
          got you covered."
      />
      <FadeIn className="relative mt-12 before:absolute before:inset-0 before:z-20 before:-translate-x-full after:absolute after:inset-0 after:z-20 after:translate-x-full md:mt-20">
        <div className="testimonials-carousel swiper-container group">
          <Highlighter
            className="swiper-wrapper w-fit"
            refresh={swiperInitialized}
          >
            {carouselItems.map((item, index) => (
              <HighlighterItem key={index} className="swiper-slide group/slide">
                <div className="relative z-20 overflow-hidden rounded-[inherit]">
                  <Card className="relative z-20 overflow-hidden rounded-[inherit] border-0 bg-primary-foreground">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                      quantity={8}
                      refresh={swiperInitialized}
                    />
                    <CardHeader>
                      <div className="my-6 flex h-10 w-10 items-center justify-center rounded-md bg-background p-2 text-brand">
                        {React.cloneElement(item.icon, {
                          'aria-hidden': 'true',
                        })}
                      </div>
                      <CardTitle className="font-display text-xl">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <CardDescription className="text-base text-muted-foreground lg:text-lg">
                        {item.description}
                      </CardDescription>
                      <div className="mt-8 font-display text-base text-foreground lg:text-lg">
                        <p>{item.cta}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-end">
                      <Link
                        href={item.linkHref}
                        aria-label={item.ariaLabel}
                        className="group mt-4 flex items-center text-base font-medium text-foreground transition duration-150 ease-in-out hover:text-muted-foreground"
                      >
                        {item.linkText}
                        <p className="ml-2 text-brand transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 dark:text-brand">
                          <ArrowRightIcon aria-hidden="true" />
                        </p>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </HighlighterItem>
            ))}
          </Highlighter>
        </div>
      </FadeIn>

      {/* Arrows */}
      <div className="mt-8 flex justify-end">
        <button
          className="carousel-prev group relative z-20 flex h-12 w-12 items-center justify-center"
          aria-label="Previous"
        >
          <span className="sr-only">Previous</span>
          <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          className="carousel-next group relative z-20 flex h-12 w-12 items-center justify-center"
          aria-label="Next"
        >
          <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
