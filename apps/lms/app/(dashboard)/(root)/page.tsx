import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from 'ui';

import { Icons } from '@/app/ui/icons';

const tools = [
  {
    label: 'Learn',
    icon: Icons.courses,
    href: '/learn',
    cta: 'Crush it',
    description:
      'Fire up your skills in 5 minutes or less with our hand-crafted playbooks that will skyrocket your ROI.',
  },
  {
    label: 'Tools',
    icon: Icons.robot,
    href: '/tools',
    cta: 'Work it',
    description:
      "Geek out with our publishing tools. Launch your site in minutes and push through writer's block with an AI-assist.",
  },
  {
    label: 'Community',
    icon: Icons.discord,
    href: 'https://discord.com/channels/1151749282806910976/1164902538731069542',
    cta: 'Schmooze now',
    description:
      'The community is a rager of pure marketing bliss. Join the party and get your questions answered by the pros.',
  },
];

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  return (
    <div className="md:mt-8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.href}>
            <Card className="mt-4 flex cursor-pointer flex-col p-6 transition hover:shadow-md dark:hover:shadow-muted">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={cn('rounded-md', tool)}>
                    <tool.icon className={cn('h-8 w-8 text-brand', tool)} />
                  </div>
                  <div className="font-medium">
                    <h2 className="text-2xl font-display text-foreground">
                      {tool.label}
                    </h2>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-muted-foreground">
                <p>{tool.description}</p>
              </CardContent>
              <CardFooter className="mt-auto justify-end">
                <Button
                  variant="secondary"
                  className="mt-4 w-full justify-between font-bold"
                >
                  {tool.cta}
                  {''}
                  <Icons.arrowRight className="h-5 w-5 justify-end text-brand" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
