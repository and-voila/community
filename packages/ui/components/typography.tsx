import { clsx } from 'clsx';
import { ElementType, ReactNode } from 'react';

const commonClasses = 'font-display leading-snug';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function H1({ children, className = '', as = 'h1' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-3xl lg:text-5xl')}>
      {children}
    </Tag>
  );
}

export function HeroH1({
  children,
  className = '',
  as = 'h1',
}: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-3xl lg:text-5xl')}>
      {children}
    </Tag>
  );
}

export function H2({ children, className = '', as = 'h2' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-2xl lg:text-4xl')}>
      {children}
    </Tag>
  );
}

export function H3({ children, className = '', as = 'h3' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-2xl lg:text-3xl')}>
      {children}
    </Tag>
  );
}

export function H4({ children, className = '', as = 'h4' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-xl sm:text-2xl')}>
      {children}
    </Tag>
  );
}

export function H5({ children, className = '', as = 'h5' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-lg sm:text-xl')}>
      {children}
    </Tag>
  );
}

export function H6({ children, className = '', as = 'h6' }: TypographyProps) {
  const Tag = as;
  return (
    <Tag className={clsx(commonClasses, className, 'text-base lg:text-lg')}>
      {children}
    </Tag>
  );
}
