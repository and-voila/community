'use client';

import { useEffect, useState } from 'react';

import { ProModal } from '@/app/ui/modals/pro-modal';

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};
