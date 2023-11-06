import { Chapter, Course, User, UserProgress } from '@prisma/client';

import { Icons } from '@/app/ui/icons';

// -----------------------------------------------------------------------------
// SECTION: Icon Types
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// SECTION: Navigation Types
// -----------------------------------------------------------------------------

export type Route = {
  id: string;
  icon?: IconName;
  label: string;
  href: string;
};

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

export interface SidebarItemProps {
  icon: IconName;
  label: string;
  href: string;
}

export interface SidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export interface MobileSidebarProps {
  apiLimitCount: number;
  isPaidMember: boolean;
}

export interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  apiLimitCount: number;
  isPaidMember: boolean;
}

export interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  isPaidMember: boolean;
  apiLimitCount: number;
}

export interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  apiLimitCount: number;
  isPaidMember: boolean;
}

// -----------------------------------------------------------------------------
// SECTION: Config Types
// -----------------------------------------------------------------------------

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

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type FooterConfig = {
  footerNav: MainNavItem[];
};

// -----------------------------------------------------------------------------
// SECTION: Subscription related Types
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// SECTION: Miscellaneous Types
// -----------------------------------------------------------------------------

export type MarketingBenefitsProps = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  emojiDescription: string;
};
