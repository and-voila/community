import { ModeToggle, Separator } from '@ui/index';
import Link from 'next/link';

interface ExternalLink {
  name: string;
  href: string;
}

const externalLinks: ExternalLink[] = [
  {
    name: 'Community',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
  },
  {
    name: 'Documentation',
    href: 'https://docs.andvoila.gg',
  },
  {
    name: 'Support',
    href: 'https://discord.com/channels/1151749282806910976/1151825811427561623',
  },
];

const SidebarQuickLinks: React.FC = () => {
  return (
    <div className="absolute bottom-0 mb-2 flex w-full flex-col items-start space-y-2 p-4 text-sm font-semibold text-muted-foreground">
      <h2 className="text-base text-foreground">Quick links</h2>
      <Separator className="mb-2 bg-brand" />
      {externalLinks.map(({ name, href }) => (
        <Link
          href={href}
          key={name}
          className="flex items-center space-x-2 hover:text-foreground"
        >
          <span>{name}</span>
          <p>↗</p>
        </Link>
      ))}
      <div className="mt-4 flex items-center space-x-2">
        <p className="mr-4 text-xs text-foreground">
          Created by{' '}
          <Link
            href="https://bril.la"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand hover:underline hover:underline-offset-4"
          >
            BRIL.LA
          </Link>
        </p>
        <div className="my-4 md:my-0">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default SidebarQuickLinks;
