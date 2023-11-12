import Link from 'next/link';

import type { IMeta } from '~/app/apps';

export default function AppGridCell({ meta }: { meta: IMeta }) {
  return (
    <Link
      href={`/apps/${meta.parent}`}
      className='bg-secondary rounded-xl p-4 flex flex-col gap-2'
    >
      <h2>{meta.name}</h2>
      <p>{meta.description}</p>
      {meta.tags.map(tag => (
        <p key={tag}>{tag}</p>
      ))}
    </Link>
  );
}
