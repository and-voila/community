'use client';

import { usePathname } from 'next/navigation';

import { Icons } from '@/app/ui/icons';
import { SidebarItem } from '@/app/ui/learn/dashboard/sidebar-item';

const guestRoutes = [
  {
    icon: Icons.home,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Icons.search,
    label: 'Browse',
    href: '/search',
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

const teacherRoutes = [
  {
    icon: Icons.courses,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: Icons.barchart,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes('/teacher');

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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
