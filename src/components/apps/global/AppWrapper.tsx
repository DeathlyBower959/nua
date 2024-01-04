import { type ReactNode } from 'react';

export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <div className='px-2 w-full max-w-xl'>{children}</div>
);
