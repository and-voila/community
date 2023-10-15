import { FunctionComponent, SVGProps } from 'react';

export interface LucideIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export * from './components/container';
export * from './components/fade-in';
export * from './components/faq';
export * from './components/gradient-headings';
export * from './components/logo-square';
export * from './components/mode-toggle';
export * from './components/prose';
export * from './components/theme-provider';
export * from './components/typography';
export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/badge';
export * from './components/ui/button';
export * from './components/ui/card';
export * from './components/ui/checkbox';
export * from './components/ui/combobox';
export * from './components/ui/command';
export * from './components/ui/dialog';
export * from './components/ui/dropdown-menu';
export * from './components/ui/form';
export * from './components/ui/input';
export * from './components/ui/label';
export * from './components/ui/popover';
export * from './components/ui/separator';
export * from './components/ui/sheet';
export * from './components/ui/switch';
export * from './components/ui/table';
export * from './components/ui/textarea';
export * from './lib/utils';
export * from '@radix-ui/react-icons';
export * as ReactIcon from '@radix-ui/react-icons';
export * from 'class-variance-authority';
export { clsx } from 'clsx';
export * as LucideReact from 'lucide-react';
export type LucideIcon = FunctionComponent<LucideIconProps>;
export * from './components/ui/skeleton';
