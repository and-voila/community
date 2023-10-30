import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-5xl text-foreground">Dashboard</h1>
      <div className="flex flex-col space-y-6">
        <Link href="/learn">Learn</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </div>
  );
}
