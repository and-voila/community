import { DashboardConfig } from 'types';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      id: 'documentation',
      title: 'Documentation',
      href: '/docs',
    },
    {
      id: 'support',
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      id: 'posts',
      title: 'Posts',
      href: '/dashboard',
      icon: 'post',
    },
    {
      id: 'billing',
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing',
    },
    {
      id: 'title',
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};
