'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Switch } from './ui/switch';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="my-4 flex items-center">
      <SunIcon className="mr-2 h-4 w-4" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <MoonIcon className="ml-2 h-4 w-4" />
    </div>
  );
}
