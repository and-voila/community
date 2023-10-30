import { LayoutConfig } from '../lib/definitions';
import { dashboardConfig } from './dashboard';
import { learnConfig } from './learn';
import { toolsConfig } from './tools';

export function getLayoutConfig(pathname: string): LayoutConfig {
  if (pathname.startsWith('/dashboard')) {
    return dashboardConfig;
  } else if (pathname.startsWith('/learn')) {
    return learnConfig;
  } else if (pathname.startsWith('/tools')) {
    return toolsConfig;
  } else {
    // Default config
    return {
      navbarRoutes: [],
      sidebarRoutes: [],
    };
  }
}
