import {
  ActivityLogIcon,
  ArrowRightIcon,
  BarChartIcon,
  Cross1Icon,
  DiscordLogoIcon,
  DragHandleDots2Icon,
  FileTextIcon,
  GearIcon,
  GitHubLogoIcon,
  HomeIcon,
  ImageIcon,
  LinkedInLogoIcon,
  ListBulletIcon,
  LockClosedIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
  NotionLogoIcon,
  Pencil1Icon,
  PlusCircledIcon,
  QuestionMarkCircledIcon,
  ReaderIcon,
  RocketIcon,
  StarIcon,
  VideoIcon,
} from '@ui/index';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  discord: DiscordLogoIcon,
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg role="img" viewBox="0 0 512 512" {...props}>
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  linkedin: LinkedInLogoIcon,
  youtube: VideoIcon,
  github: GitHubLogoIcon,
  notion: NotionLogoIcon,
  home: HomeIcon,
  search: MagnifyingGlassIcon,
  settings: GearIcon,
  help: QuestionMarkCircledIcon,
  docs: ReaderIcon,
  courses: ListBulletIcon,
  analytics: BarChartIcon,
  magic: MagicWandIcon,
  file: FileTextIcon,
  locked: LockClosedIcon,
  activity: ActivityLogIcon,
  pencil: Pencil1Icon,
  plusCircled: PlusCircledIcon,
  image: ImageIcon,
  crossLarge: Cross1Icon,
  drag: DragHandleDots2Icon,
  star: StarIcon,
  rocket: RocketIcon,
  arrowright: ArrowRightIcon,
};
