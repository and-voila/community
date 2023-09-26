import Image from 'next/image';
import Link from 'next/link';

import { FadeIn } from '@/components/fade-in';
import SectionIntro from '@/components/section-intro';
import { getCollections } from '@/lib/shopify';

interface Collection {
  title: string;
  path: string;
  image?: {
    src: string;
  };
}

async function CollectionList() {
  const collections = await getCollections();

  const desiredCollections = ['Hot', 'Get', 'Keep', 'Grow', 'Wow'];

  const filteredCollections = collections
    .filter((collection: Collection) =>
      desiredCollections.includes(collection.title),
    )
    .sort(
      (a: Collection, b: Collection) =>
        desiredCollections.indexOf(a.title) -
        desiredCollections.indexOf(b.title),
    );

  return filteredCollections.map((collection: Collection) => (
    <Link
      key={collection.title}
      href={collection.path}
      aria-label={`Navigate to ${collection.title} collection`}
      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg border p-6 sm:w-64 md:grayscale md:hover:grayscale-0 xl:w-auto"
    >
      <span aria-hidden="true" className="absolute inset-0">
        <Image
          src={collection.image?.src || ''}
          alt={
            collection.image?.src
              ? `Image of ${collection.title} collection`
              : 'Default collection image'
          }
          className="h-full w-full object-cover transition"
          width={600}
          height={600}
        />
      </span>
    </Link>
  ));
}

const LandingCollections: React.FC = () => {
  return (
    <div className="relative py-24 sm:py-32">
      <SectionIntro
        eyebrow="Coming in hot"
        heading="Grab it hot"
        description="We've curated a collection of the roasts to help you get, keep, and grow your customers. Check out what all the buzz is about."
      />
      <FadeIn className="mx-auto mt-10 rounded-xl bg-primary-foreground p-6 lg:p-12">
        <div className="rounded-xl bg-primary-foreground py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="mb-6 font-display text-2xl text-foreground">
              Browse top categories
            </h2>
            <Link
              href="/search"
              aria-label="Navigate to search page to browse all categories"
              className="hidden text-sm text-muted-foreground hover:text-secondary-foreground sm:block lg:text-base"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  <CollectionList />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 px-4 sm:hidden">
            <Link
              href="/search"
              aria-label="Navigate to search page to browse all categories"
              className="block text-sm font-semibold text-primary-foreground hover:text-secondary-foreground"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default LandingCollections;
