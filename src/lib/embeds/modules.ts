type ITag = 'document' | 'converter' | 'fun' | 'miscellaneous';
export interface IModuleMetadata {
  name: string;
  description: string;
  tags: ITag[];
}

export interface IModule {
  route_name: string;
  metadata: IModuleMetadata;
}

let moduleRegistry: IModule[] = [];

// Function to register modules
export const registerModule = async (moduleName: string) => {
  const metadata: IModuleMetadata = (
    (await import(`~/app/embeds/(modules)/${moduleName}/metadata.ts`)) as {
      default: IModuleMetadata;
    }
  ).default;
  moduleRegistry.push({
    route_name: moduleName,
    metadata,
  });
};
export const registerModules = async (modules: string[]) => {
  moduleRegistry = [];
  for (const m of modules) {
    await registerModule(m);
  }
};

// Function to get all registered modules
export const getAllModules = () => moduleRegistry;
