import { User } from '@prisma/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarProps,
} from '@ui/components/ui/avatar';

import { Icons } from '@/components/icons';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>;
  className?: string;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
