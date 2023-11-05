import { User } from '@prisma/client';

import { Icons } from '@/app/ui/icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RadixIconProps = React.SVGProps<SVGSVGElement>;

export type NavItem = {
  id: string;
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  id: string;
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  company: string;
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type FooterConfig = {
  footerNav: MainNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
    stripeCurrentPeriodEnd: number;
    isPaidMember: boolean;
  };

export type MarketingBenefitsProps = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  emojiDescription: string;
};

export type SocialIcon = keyof typeof Icons;

export type SocialItem = {
  name: string;
  href: string;
  icon: SocialIcon;
};

export type SocialConfig = {
  social: SocialItem[];
};

export type IconKey = keyof typeof Icons;
