import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { LinkedInLogoIcon } from 'ui';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

interface Person {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

const people: Person[] = [
  {
    name: 'Ambreen Dar',
    role: 'Co-Founder / Design',
    imageUrl: '/images/team/ambreen-dar.png',
    bio: "From classrooms to boardrooms, my love for design has guided me through the digital marketing maze. As a co-founder at BRIL.LA, I blend art with strategy for results that delight. Also, I'm a devoted dog mom to four adorable fur babies.",
    twitterUrl: 'https://twitter.com/breenzy',
    linkedinUrl: 'https://www.linkedin.com/in/ambreen-dar-b3bb006/',
  },
  {
    name: 'Rebekah Radice',
    role: 'Co-Founder / Sales & Marketing',
    imageUrl: '/images/team/rebekah-radice-hair.png',
    bio: 'Two decades in global branding have equipped me with the skills to turn insights into impact. At BRIL.LA, I leverage this experience to provide you with actionable strategies that matter. Off the clock, I hone my culinary skills with Italian cuisine.',
    twitterUrl: 'https://twitter.com/RebekahRadice',
    linkedinUrl: 'https://www.linkedin.com/in/rebekahradice/',
  },
  {
    name: 'Sam Rizvi',
    role: 'Consulting Technologist',
    imageUrl: '/images/team/sam-rizvi.png',
    bio: "After 25 years in consulting and tech, retirement was on the horizon. Until my wife, Ambreen, and our bestie Rebekah roped me back in. I'm your go-to for turning visions into reality. Big on beer, basketball, tacos, and, of course, my dogs.",
    twitterUrl: 'https://twitter.com/izvirs',
    linkedinUrl: 'https://www.linkedin.com/in/rizvio/',
  },
];

const CommunityTeam: FC = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-20 py-24 md:py-32 xl:grid-cols-5">
      <FadeIn className="max-w-2xl xl:col-span-2">
        <GradientHeading level="h3" as="h2">
          Meet the mods
        </GradientHeading>
        <p className="mt-6 text-base text-muted-foreground lg:max-w-sm lg:text-lg">
          We&apos;re more than allies, we&apos;re your catalysts in the
          ever-changing landscape of digital marketing. With decades of hands-on
          experience, we offer insights that turn your strategies into
          game-changers. Ready to transform your marketing journey?
        </p>
      </FadeIn>
      <FadeInStagger className="-mt-6 space-y-12 divide-y divide-brand/70 xl:col-span-3">
        {people.map((person) => (
          <FadeIn
            key={person.name}
            className="flex flex-col gap-10 pt-12 sm:flex-row"
          >
            <Image
              className="aspect-[4/5] w-52 flex-none rounded-2xl bg-white object-contain dark:bg-primary-foreground md:grayscale md:hover:grayscale-0"
              src={person.imageUrl}
              alt=""
              width={208}
              height={260}
            />
            <div className="max-w-xl flex-auto">
              <GradientHeading level="h5" as="h3">
                {person.name}
              </GradientHeading>
              <p className="text-base text-muted-foreground">{person.role}</p>
              <p className="mt-6 text-base text-muted-foreground">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  {person.twitterUrl && (
                    <Link
                      href={person.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition duration-200 hover:text-foreground"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </Link>
                  )}
                </li>
                <li>
                  {person.linkedinUrl && (
                    <Link
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition duration-200 hover:text-foreground"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <LinkedInLogoIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  );
};

export default CommunityTeam;
