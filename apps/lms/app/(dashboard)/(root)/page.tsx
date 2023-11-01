import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from 'ui';

import { getCurrentUser } from '@/app/lib/session';
import { Icons } from '@/app/ui/icons';

const tools = [
  {
    label: 'Learn',
    icon: Icons.courses,
    href: '/learn',
    cta: 'Crush it',
    description:
      'Unlock daily micro-courses that supercharge your marketing game. Boost your ROI in less than 5 minutes per playbook.',
  },
  {
    label: 'Tools',
    icon: Icons.robot,
    href: '/tools',
    cta: 'Hack it',
    description:
      'Deploy your own website in under 3 minutes with a custom domain and smash writer’s block with Juno, your AI wingthing.',
  },
  {
    label: 'Community',
    icon: Icons.discord,
    href: 'https://discord.com/channels/1151749282806910976/1164902538731069542',
    cta: 'Work it',
    description:
      'Dive into a buzzing hub of marketing savants. Get real-time insights, priceless tips, and direct access to industry pros.',
  },
];

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userId = user?.id;

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
