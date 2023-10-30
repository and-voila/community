import { Icons } from '../ui/icons';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  disabled?: boolean;
}
export interface NavbarRoute extends NavItem {}

export interface SidebarRoute extends NavItem {
  icon: keyof typeof Icons;
}

export interface LayoutConfig {
  navbarRoutes: NavbarRoute[];
  sidebarRoutes: SidebarRoute[];
}
