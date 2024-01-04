'use client';
import { InfoIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      {children}
      <a
        className='fixed bottom-2 right-2'
        href={`https://nua.vercel.app${pathname.replace('/view', '')}`}
        target='_blank'
      >
        <InfoIcon />
      </a>
    </>
  );
}
