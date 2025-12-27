import React from 'react';
import { cn } from '@workspace/ui/lib/utils';

type TypographyProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Typography = ({ children, className, onClick }: TypographyProps) => {
  return (
    <span
      onClick={onClick}
      className={cn('font-semibold uppercase text-sm tracking-normal', className)}
    >
      {children}
    </span>
  );
};
