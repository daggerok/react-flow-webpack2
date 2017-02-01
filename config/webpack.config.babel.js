import entry from './webpack/entry.babel';
import output from './webpack/output.babel';
import module from './webpack/module.babel';
import plugins from './webpack/plugins.babel';
import resolve from './webpack/resolve.babel';
import devtool from './webpack/devtool.babel';
import devServer from './webpack/webpack-dev-server.babel';
import node from './webpack/node.babel';

export default env => ({
  entry,
  output,
  module,
  plugins: plugins(env),
  resolve,
  devServer,
  bail: true,
  cache: true,
  target: 'web',
  devtool: devtool(env),
  node,
});
