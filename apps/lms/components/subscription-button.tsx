'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from 'ui';

import { Icons } from './icons';

export const SubscriptionButton = ({
  isPaidMember = false,
  size,
}: {
  isPaidMember: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size={size}
      variant={isPaidMember ? 'default' : 'custom'}
      disabled={loading}
      onClick={onClick}
    >
      {isPaidMember ? 'Manage Subscription' : 'Become a Member'}
      {!isPaidMember && <Icons.magic className="ml-2 h-4 w-4" />}
    </Button>
  );
};
