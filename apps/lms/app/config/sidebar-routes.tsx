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
    icon: Icons.courses,
    label: 'My Playbooks',
    href: '/learn',
  },
  {
    icon: Icons.search,
    label: 'Browse',
    href: '/learn/search',
  },
];

const teacherRoutes = [
  {
    icon: Icons.courses,
    label: 'Courses',
    href: '/learn/teacher/courses',
  },
  {
    icon: Icons.barchart,
    label: 'Analytics',
    href: '/learn/teacher/analytics',
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
