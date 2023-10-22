'use client';

import { useState } from 'react';
import { Button } from '@ui/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';

interface CourseEnrollButtonProps {
  isFree: boolean;
  courseId: string;
}

export const CourseEnrollButton = ({ isFree }: CourseEnrollButtonProps) => {
  const [isLoading, setLoading] = useState(false);

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
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      variant="custom"
      className="w-full flex-shrink-0 md:w-auto"
    >
      {isFree ? 'Enroll for Free' : 'Become a Member'}
    </Button>
  );
};
