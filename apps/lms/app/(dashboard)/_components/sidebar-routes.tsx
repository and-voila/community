'use client';

import { usePathname } from 'next/navigation';
import {
  BarChartIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
} from '@ui/index';

import { SidebarItem } from './sidebar-item';

const guestRoutes = [
  {
    icon: HomeIcon,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: MagnifyingGlassIcon,
    label: 'Browse',
    href: '/search',
  },
];

const teacherRoutes = [
  {
    icon: ListBulletIcon,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChartIcon,
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
