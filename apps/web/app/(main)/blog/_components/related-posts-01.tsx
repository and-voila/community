import Image from 'next/image';

import RelatedImage03 from '@/public/blog/images/related-post-03.jpg';
import RelatedImage04 from '@/public/blog/images/related-post-04.jpg';
import RelatedImage05 from '@/public/blog/images/related-post-05.jpg';
import RelatedImage06 from '@/public/blog/images/related-post-06.jpg';

export default function RelatedPosts01() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-16">
          <div
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            data-aos-id-featposts
          >
            {/* 1st article */}
            <article
              className="group relative px-6 py-4 sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="100"
            >
              <figure>
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                  src={RelatedImage03}
                  alt="Related post 03"
                />
                <div
                  className="absolute inset-0 bg-teal-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                  aria-hidden="true"
                />
              </figure>
              <div className="relative flex h-full flex-col text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                      Creating events in the pandemic
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Josh Wang · Nov 16, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 2nd article */}
            <article
              className="group relative px-6 py-4 sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="200"
            >
              <figure>
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                  src={RelatedImage04}
                  alt="Related post 04"
                />
                <div
                  className="absolute inset-0 bg-purple-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                  aria-hidden="true"
                />
              </figure>
              <div className="relative flex h-full flex-col text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                      5 Ways to grow your personal network
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Yuri Lapko · Nov 14, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 3rd article */}
            <article
              className="group relative px-6 py-4 sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="300"
            >
              <figure>
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                  src={RelatedImage05}
                  alt="Related post 05"
                />
                <div
                  className="absolute inset-0 bg-indigo-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                  aria-hidden="true"
                />
              </figure>
              <div className="relative flex h-full flex-col text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                      How to fix my website myself
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Josh Wang · Nov 10, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 4th article */}
            <article
              className="group relative px-6 py-4 sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="400"
            >
              <figure>
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                  src={RelatedImage06}
                  alt="Related post 06"
                />
                <div
                  className="absolute inset-0 bg-pink-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                  aria-hidden="true"
                />
              </figure>
              <div className="relative flex h-full flex-col text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                      How COVID-19 redefined the entrepreneur
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Mary Champ · Nov 2, 2020
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
