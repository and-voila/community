import Image from 'next/image';

import PostDate from './post-date';

interface AuthorProps {
  img: string;
  name: string;
  date: string;
}

export const Author: React.FC<AuthorProps> = ({ img, name, date }) => (
  <footer className="flex items-center text-sm lg:text-base">
    <div className="mr-4 rounded-full bg-background">
      <Image className="mx-auto" src={img} width={40} height={40} alt={name} />
    </div>
    <div className="text-muted-foreground">
      <span className="font-medium text-foreground">{name}</span>
      <span className="text-brand"> - </span>
      <span className="text-muted-foreground">
        <PostDate dateString={date} />
      </span>
    </div>
  </footer>
);
