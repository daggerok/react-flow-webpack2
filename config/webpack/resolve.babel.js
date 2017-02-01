import { resolve } from 'path';

export const pathTo = (rel) => resolve(process.cwd(), rel);

export default {
  modules: [
    'node_modules',
    pathTo('./src'),
  ],
  extensions: [
    '.js',
    '.styl',
  ],
};
