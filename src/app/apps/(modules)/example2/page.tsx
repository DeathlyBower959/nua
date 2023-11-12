import type { Metadata } from 'next';
import { app_meta } from './app_meta';

export const metadata: Metadata = {
  title: `nua | ${app_meta.name.toLowerCase()}`,
};

export default function App() {
  return <div>Example2 App</div>;
}
