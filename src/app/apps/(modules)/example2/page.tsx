import type { Metadata } from 'next';
import { AppHeader, AppWrapper } from '~/components/apps/global';

import app_meta from './metadata';

export const metadata: Metadata = {
  title: `nua | ${app_meta.name.toLowerCase()}`,
};

export default function App() {
  return (
    <AppWrapper>
      <AppHeader>Example2 App</AppHeader>
    </AppWrapper>
  );
}
