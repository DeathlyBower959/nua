import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link href='/apps' className='underline mt-4'>
        Apps
      </Link>
    </>
  );
}
