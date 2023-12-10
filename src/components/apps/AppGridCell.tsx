import Link from 'next/link';

import type { IModule } from '~/lib/modules';

export default function AppGridCell({ meta }: { meta: IModule }) {
  return (
    <Link
      href={`/apps/${meta.route_name}`}
      className='bg-secondary rounded-xl p-4 flex flex-col gap-2'
    >
      <h2>{meta.metadata.name}</h2>
      <p>{meta.metadata.description}</p>
      {meta.metadata.tags.map(tag => (
        <p key={tag}>{tag}</p>
      ))}
    </Link>
  );
}
