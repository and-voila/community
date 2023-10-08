import Image from 'next/image';

import Author02 from '@/public/images/blog/news-author-03.jpg';
import Author01 from '@/public/images/blog/news-author-04.jpg';
import RelatedImage01 from '@/public/images/blog/related-post-01.jpg';
import RelatedImage02 from '@/public/images/blog/related-post-02.jpg';

export default function RelatedPosts02() {
  return (
    <aside>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <h4 className="h4 font-red-hat-display mb-8">Related articles</h4>

            {/* Articles container */}
            <div
              className="grid gap-4 sm:grid-cols-2 sm:gap-6"
              data-aos-id-relposts
            >
              {/* 1st article */}
              <article
                className="group relative p-6 text-white"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-relposts]"
              >
                <figure>
                  <Image
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                    src={RelatedImage01}
                    alt="Related post 01"
                  />
                  <div
                    className="absolute inset-0 bg-teal-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                    aria-hidden="true"
                  />
                </figure>
                <div className="relative flex h-full flex-col">
                  <header className="grow">
                    <a className="hover:underline" href="#0">
                      <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                        How to talk about yourself in the best possible way
                      </h3>
                    </a>
                    <div className="text-sm opacity-80">Nov 16, 2020</div>
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="mt-5 flex items-center text-sm">
                      <a href="#0">
                        <Image
                          className="mr-3 shrink-0 rounded-full"
                          src={Author01}
                          width={32}
                          height={32}
                          alt="Author 04"
                        />
                      </a>
                      <div>
                        <span className="opacity-75">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Mari Champ
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>

              {/* 2nd article */}
              <article
                className="group relative p-6 text-white"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-relposts]"
                data-aos-delay="200"
              >
                <figure>
                  <Image
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 ease-out group-hover:opacity-75"
                    src={RelatedImage02}
                    alt="Related post 02"
                  />
                  <div
                    className="absolute inset-0 bg-purple-500 opacity-75 transition duration-700 ease-out group-hover:opacity-50"
                    aria-hidden="true"
                  />
                </figure>
                <div className="relative flex h-full flex-col">
                  <header className="grow">
                    <a className="hover:underline" href="#0">
                      <h3 className="font-red-hat-display mb-2 text-lg font-bold tracking-tight">
                        How I Park Inc make $5,000 every month by sellings gifts
                      </h3>
                    </a>
                    <div className="text-sm opacity-80">Nov 12, 2020</div>
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="mt-5 flex items-center text-sm">
                      <a href="#0">
                        <Image
                          className="mr-3 shrink-0 rounded-full"
                          src={Author02}
                          width={32}
                          height={32}
                          alt="Author 03"
                        />
                      </a>
                      <div>
                        <span className="opacity-75">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Lisa Allison Champ
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
