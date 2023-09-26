import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

import { Container } from '@/components/container';
import { FadeIn } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';
import { Mdx } from '@/components/mdx-components';
import { formatDate, SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }));

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug.join('/'),
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto max-w-3xl text-center">
            <time
              dateTime={post?.date}
              className="font-display text-sm font-medium uppercase leading-none tracking-widest text-brand"
            >
              {post?.date && formatDate(post.date)}{' '}
            </time>
            <div className="mx-auto max-w-2xl py-6">
              <GradientHeading level="h2" as="h1">
                {post?.title}
              </GradientHeading>
              <p className="mt-6 text-sm font-medium text-muted-foreground lg:text-base">
                By {post?.author}
              </p>
            </div>
            <div className="border-t border-brand/70" />
          </header>
        </FadeIn>
        <FadeIn className="mx-auto mt-16 justify-center sm:mt-24 md:flex">
          <div>
            <Mdx code={post?.body.code ?? ''} />
          </div>
        </FadeIn>
      </article>
    </Container>
  );
};

export default PostLayout;

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug.join('/'),
  );

  if (!post) {
    throw new Error('Post not found');
  }

  const seoTitle = post.title;
  const seoMetaDescription = post.description;
  const postUrl = `${SITE_URL}/txt/${params.slug.join('/')}`;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      type: 'article',
      title: seoTitle,
      description: seoMetaDescription,
      url: postUrl,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
  };
}
