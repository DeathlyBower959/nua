import AppGridCell from '~/components/apps/AppGridCell';
import { getAllModules } from '~/lib/modules';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'nua | apps',
};

export default function Apps() {
  return (
    // text-gray-900 is interesting, maybe a cutout text effect?
    <div className='flex flex-wrap justify-center gap-4'>
      {getAllModules().map(meta => (
        <AppGridCell
          key={meta.metadata.name.trim().replace(' ', '-').toLowerCase()}
          meta={meta}
        />
      ))}
    </div>
  );
}
