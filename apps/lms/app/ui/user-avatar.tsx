import { User } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from '@ui/index';

import { Icons } from './icons';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-8 w-8 text-brand" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
