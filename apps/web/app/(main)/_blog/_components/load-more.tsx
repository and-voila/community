'use client';

import React, { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  ArrowDownIcon,
  Button,
  ExclamationTriangleIcon,
} from '@ui/index';

import PostItem from './post-item';

interface PostType {
  title: string;
  publishedAt: string;
  summary: string;
  author: string;
  authorImg: string;
  tags?: string[];
  image: string;
  slug: string;
}

interface LoadMoreButtonProps {
  posts: PostType[];
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ posts }) => {
  const [postCount, setPostCount] = useState(9);

  return (
    <div className="mx-auto md:max-w-none">
      {/* Section title */}
      <h3 className="h4 mb-10 border-b pb-6 font-display text-sm uppercase tracking-widest text-brand">
        Latest articles
      </h3>

      {/* Articles container */}
      <div className="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        {posts.slice(0, postCount).map((post, postIndex) => (
          <PostItem key={postIndex} {...post} />
        ))}
      </div>

      {/* Load more logic */}
      {postCount >= posts.length ? (
        <div className="mx-auto mt-6 flex max-w-md items-center justify-center lg:mt-12">
          <Alert>
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Uh oh!</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              That&apos;s all the articles we have for now.
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setPostCount(postCount + 9)}
          >
            <ArrowDownIcon className="mr-2 h-4 w-4" />
            Load more articles
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
