import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl'>Home</h1>
      <Link href='/apps' className='underline'>
        Apps
      </Link>
      <Link href='/embeds' className='underline'>
        Embeds
      </Link>
    </>
  );
}
