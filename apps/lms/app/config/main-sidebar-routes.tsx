'use client';

import { Icons } from '@/app/ui/icons';
import { SidebarItem } from '@/app/ui/learn/dashboard/sidebar-item';

const dashboardRoutes = [
  {
    icon: Icons.home,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Icons.courses,
    label: 'Learn',
    href: '/learn',
  },
  {
    icon: Icons.robot,
    label: 'AI Tools',
    href: '/tools',
  },
  {
    icon: Icons.settings,
    label: 'Settings',
    href: '/settings',
  },
  {
    icon: Icons.discord,
    label: 'Community',
    href: 'https://discord.com/channels/1151749282806910976/1164902538731069542',
  },
  {
    icon: Icons.docs,
    label: 'Documentation',
    href: '/docs',
  },
  {
    icon: Icons.help,
    label: 'Support',
    href: '/support',
  },
];

export const MainSidebarRoutes = () => {
  const routes = dashboardRoutes;

  return (
    <div className="mt-6 flex w-full flex-col">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
