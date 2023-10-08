import { allPosts } from "contentlayer/generated";
import PostItem from "./post-item";

export default function News() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const posts = allPosts.slice(0, 3);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Refreshing news for developers and designers
            </h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {posts.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
