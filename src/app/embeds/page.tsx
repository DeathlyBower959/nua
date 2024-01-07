import AppGridCell from '~/components/apps/AppGridCell';
import { getAllModules } from '~/lib/modules/embeds/modules';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'nua | embeds',
};

export default function Embeds() {
  // FIX: modules is [] on first render
  const modules = getAllModules();

  return (
    // text-gray-900 is interesting, maybe a cutout text effect?
    <div className='flex flex-wrap justify-center gap-4 px-4'>
      {modules.map(meta => (
        <AppGridCell
          group='embeds'
          key={meta.metadata.name.trim().replace(' ', '-').toLowerCase()}
          meta={meta}
        />
      ))}
    </div>
  );
}
