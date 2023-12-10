import type { Metadata } from 'next';
import app_meta from './metadata';

export const metadata: Metadata = {
  title: `nua | ${app_meta.name.toLowerCase()}`,
};

export default function App() {
  return <div>Example App</div>;
}
