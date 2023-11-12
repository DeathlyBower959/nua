import AppGridCell from '~/components/apps/AppGridCell';

import { GET_APPS } from './';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'nua | apps',
};

export default async function Apps() {
  const apps = await GET_APPS();
  return (
    // text-gray-900 is interesting, maybe a cutout text effect?
    <div className='flex flex-wrap justify-center gap-4'>
      {apps.map(meta => (
        <AppGridCell
          key={meta.name.trim().replace(' ', '-').toLowerCase()}
          meta={meta}
        />
      ))}
    </div>
  );
}
