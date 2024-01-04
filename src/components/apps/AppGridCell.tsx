import Link from 'next/link';

import type { IModule } from '~/lib/apps/modules';

export default function AppGridCell({
  meta,
  group,
}: {
  meta: IModule;
  group: string;
}) {
  return (
    <Link
      href={`/${group}/${meta.route_name}`}
      className='bg-secondary rounded-xl p-4 flex flex-col gap-2 flex-1 min-w-[20em]'
    >
      <h2>{meta.metadata.name}</h2>
      <p className='text-sm'>{meta.metadata.description}</p>
      {meta.metadata.tags.map(tag => (
        <p key={tag} className='text-sm'>
          {tag}
        </p>
      ))}
    </Link>
  );
}
