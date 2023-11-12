import { cache } from 'react';

type ITag = 'document' | 'converter' | 'fun' | 'miscellaneous';

export interface IMetaData {
  name: string;
  description: string;
  tags: ITag[];
}

export type IMeta = IMetaData & {
  parent: string;
};

export const getImports = async (): Promise<[string, IMetaData][]> => [
  ['example', (await import('~/app/apps/(modules)/example/app_meta')).app_meta],
  [
    'example2',
    (await import('~/app/apps/(modules)/example2/app_meta')).app_meta,
  ],
];

export const GET_APPS = cache(async (): Promise<IMeta[]> => {
  const apps = await getImports();

  return apps.map(x => ({ ...x[1], parent: x[0] }));
});
