import { LayoutConfig } from '../lib/definitions';

export const dashboardConfig: LayoutConfig = {
  navbarRoutes: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'learn', label: 'Learn', href: '/learn' },
    { id: 'Tools', label: 'Tools', href: '/tools' },
  ],
  sidebarRoutes: [
    { id: 'dashboard', icon: 'home', label: 'Dashboard', href: '/' },
    { id: 'settings', icon: 'settings', label: 'Settings', href: '/settings' },
    {
      id: 'community',
      icon: 'discord',
      label: 'Community',
      href: 'https://discord.com/channels/1151749282806910976/1164902538731069542',
    },
    {
      id: 'documentation',
      icon: 'docs',
      label: 'Documentation',
      href: '/docs',
    },
  ],
};
