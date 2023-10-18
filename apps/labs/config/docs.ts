import { DocsConfig } from 'types';

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      id: 'documentation',
      title: 'Documentation',
      href: '/docs',
    },
    {
      id: 'guides',
      title: 'Guides',
      href: '/guides',
    },
  ],
  sidebarNav: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
      ],
    },
    {
      id: 'documentation',
      title: 'Documentation',
      items: [
        {
          title: 'Introduction',
          href: '/docs/documentation',
        },
        {
          title: 'Contentlayer',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Components',
          href: '/docs/documentation/components',
        },
        {
          title: 'Code Blocks',
          href: '/docs/documentation/code-blocks',
        },
        {
          title: 'Style Guide',
          href: '/docs/documentation/style-guide',
        },
        {
          title: 'Search',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
    {
      id: 'blog',
      title: 'Blog',
      items: [
        {
          title: 'Introduction',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Build your own',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Writing Posts',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      items: [
        {
          title: 'Introduction',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Layouts',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Server Components',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Authentication',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Database with Prisma',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'API Routes',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
    {
      id: 'marketing-site',
      title: 'Marketing Site',
      items: [
        {
          title: 'Introduction',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'File Structure',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Tailwind CSS',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Typography',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
  ],
};
