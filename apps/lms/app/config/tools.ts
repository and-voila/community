import { LayoutConfig } from '../lib/definitions';

export const toolsConfig: LayoutConfig = {
  navbarRoutes: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'learn', label: 'Learn', href: '/learn' },
    { id: 'Tools', label: 'Tools', href: '/tools' },
  ],
  sidebarRoutes: [
    { id: 'dashboard', icon: 'home', label: 'Dashboard', href: '/' },
    { id: 'overview', icon: 'gauge', label: 'Overview', href: '/tools' },
    {
      id: 'sites',
      icon: 'browsers',
      label: 'Sites',
      href: '/tools/sites',
    },
  ],
};
