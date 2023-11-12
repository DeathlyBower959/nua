import Link from 'next/link';
import SettingsModal from '~/modals/settings';

import Logo from './atoms/logo';

export default function Navbar() {
  return (
    // apply the className styles to this div which creates a clean looking, simple navbar. Dont add extra elements, just styles
    <div className='flex justify-between items-center py-4 px-8'>
      <Link href='/' aria-label='nua'>
        <Logo className='h-8' />
        <h1 className='hidden'>nua</h1>
      </Link>
      <SettingsModal />
    </div>
  );
}
