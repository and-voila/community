'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from 'ui';

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
      className="w-full lg:w-auto"
    >
      {isPaidMember ? 'Manage Subscription' : 'Upgrade'}
      {!isPaidMember}
    </Button>
  );
};
