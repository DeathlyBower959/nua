import type { ReactNode } from 'react';

export const AppHeader = ({ children }: { children: ReactNode }) => (
  <h2 className='text-3xl text-center mb-4'>{children}</h2>
);
