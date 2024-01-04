import fs from 'fs';
import path from 'path';

import { registerModules } from './modules';

const modulesDirectory = path.join(process.cwd(), 'src/app/apps/(modules)');

const modules = fs
  .readdirSync(modulesDirectory)
  .filter(entry => fs.statSync(modulesDirectory + '/' + entry).isDirectory());

await registerModules(modules);
