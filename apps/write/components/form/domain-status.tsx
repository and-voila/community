'use client';

import { LucideReact } from '@ui/index';

import LoadingSpinner from './loading-spinner';
import { useDomainStatus } from './use-domain-status';

export default function DomainStatus({ domain }: { domain: string }) {
  const { status, loading } = useDomainStatus({ domain });

  return loading ? (
    <LoadingSpinner />
  ) : status === 'Valid Configuration' ? (
    <LucideReact.CheckCircle2
      fill="#2563EB"
      stroke="currentColor"
      className="text-white dark:text-black"
    />
  ) : status === 'Pending Verification' ? (
    <LucideReact.AlertCircle
      fill="#FBBF24"
      stroke="currentColor"
      className="text-white dark:text-black"
    />
  ) : (
    <LucideReact.XCircle
      fill="#DC2626"
      stroke="currentColor"
      className="text-white dark:text-black"
    />
  );
}
