import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross1Icon,
  DiscordLogoIcon,
  DotsVerticalIcon,
  ExclamationTriangleIcon,
  FileIcon,
  FileTextIcon,
  GearIcon,
  GitHubLogoIcon,
  IdCardIcon,
  ImageIcon,
  LaptopIcon,
  LinkedInLogoIcon,
  MoonIcon,
  NotionLogoIcon,
  PersonIcon,
  PlayIcon,
  PlusIcon,
  QuestionMarkCircledIcon,
  SunIcon,
  TrashIcon,
  TwitterLogoIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';

export type RadixIconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  close: Cross1Icon,
  spinner: UpdateIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  trash: TrashIcon,
  post: FileTextIcon,
  page: FileIcon,
  media: ImageIcon,
  settings: GearIcon,
  billing: IdCardIcon,
  ellipsis: DotsVerticalIcon,
  add: PlusIcon,
  warning: ExclamationTriangleIcon,
  user: PersonIcon,
  arrowRight: ArrowRightIcon,
  help: QuestionMarkCircledIcon,
  sun: SunIcon,
  moon: MoonIcon,
  laptop: LaptopIcon,
  check: CheckIcon,
  discord: DiscordLogoIcon,
  linkedin: LinkedInLogoIcon,
  youtube: PlayIcon,
  twitter: TwitterLogoIcon,
  gitHub: GitHubLogoIcon,
  notion: NotionLogoIcon,
  logo: ({ ...props }: RadixIconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-7 w-7 text-brand"
      {...props}
    >
      <path
        fill="currentColor"
        d="M29 24.5c-.3-.5-.7-.9-1.2-1.2-.3-.2-.7-.3-1-.4h2c0-2.3.1-6.5.1-8.9 0-2.4 0-4.7.1-7h-5.8c0 2.3.1 4.7.1 7v2h-1.1v-2.6h-5.7V16c-1.7 0-3-.1-4-.4-1-.3-1.5-.8-1.5-1.5 0-.6.2-1 .7-1.3.5-.3 1.1-.5 2-.6.8-.1 1.7-.1 2.7 0 1 .1 2 .3 2.9.6V7.2c-1.7-.4-3.4-.6-5.1-.6-1.7 0-3.2.3-4.6.8-1.3.5-2.4 1.3-3.2 2.3-.8 1-1.2 2.3-1.2 3.8 0 1 .2 2 .6 2.8.4.9 1 1.6 1.9 2.3-1.1.7-1.8 1.5-2.4 2.5-.5 1-.8 2-.8 3.2 0 1.4.4 2.6 1.1 3.6.7 1 1.8 1.8 3.1 2.3 1.3.5 2.8.8 4.5.8 1.8 0 3.4-.3 4.7-.9 1.4-.6 2.4-1.5 3.2-2.6.8-1.1 1.2-2.5 1.2-4v-2.4h1.2v1.8h2c-.7.1-1.2.4-1.7.9-.7.7-1 1.4-1 2.3 0 .6.2 1.2.5 1.7s.7.9 1.2 1.2c.5.3 1.1.5 1.7.5.6 0 1.2-.2 1.7-.5s.9-.7 1.2-1.2c.3-.5.5-1.1.5-1.7-.1-.6-.3-1.1-.6-1.6zm-12.4-2.4v1c0 .9-.3 1.5-.9 2-.6.5-1.3.7-2.3.7-.9 0-1.6-.2-2.1-.7-.5-.4-.7-1-.7-1.7 0-1 .5-1.7 1.6-1.9 1.1-.3 2.5-.4 4.4-.4v1z"
      />
    </svg>
  ),
};
