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
    <div className="absolute bottom-0 mb-2 flex w-full flex-col items-start space-y-2 p-4 text-sm text-muted-foreground">
      <h2 className="text-sm font-semibold text-foreground">Quick links</h2>
      <Separator className="mb-2 bg-brand/70" />
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
      <div className="my-4 md:my-0">
        <ModeToggle />
      </div>
    </div>
  );
};

export default SidebarQuickLinks;
