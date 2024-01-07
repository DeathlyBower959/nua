export type ITag =
  | 'document'
  | 'productivity'
  | 'converter'
  | 'fun'
  | 'miscellaneous';
export interface IModuleMetadata {
  name: string;
  description: string;
  tags: ITag[];
}

export interface IModule {
  route_name: string;
  metadata: IModuleMetadata;
}
