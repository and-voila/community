import { Icons } from '@/app/ui/icons';

export type IconKey = keyof typeof Icons;

export type Route = {
  id: string;
  icon?: IconKey;
  label: string;
  href: string;
};
