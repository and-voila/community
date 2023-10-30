import { LayoutConfig } from '../lib/definitions';

export const learnConfig: LayoutConfig = {
  navbarRoutes: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'learn', label: 'Learn', href: '/learn' },
    { id: 'Tools', label: 'Tools', href: '/tools' },
  ],
  sidebarRoutes: [
    { id: 'dashboard', icon: 'home', label: 'Dashboard', href: '/' },
    {
      id: 'my-playbooks',
      icon: 'courses',
      label: 'My Playbooks',
      href: '/learn',
    },
    {
      id: 'browse',
      icon: 'search',
      label: 'Browse',
      href: '/learn/search',
    },
  ],
};
