import { pathTo } from './resolve.babel';

export const publicPath = '/';

export default {
  publicPath,
  path: pathTo('./dist'),
  // filename: '[name]-[hash].js',
  filename: '[name].bundle.js?ver=[chunkhash]',
  // sourceMapFilename: 'maps/[name]-[hash].map',
  sourceMapFilename: 'maps/[name].map?ver=[chunkhash]',
  // chunkFilename: '[id].chunk.js?ver=[chunkhash]',
  chunkFilename: 'app.chunk.[id].js?ver=[chunkhash]',
  jsonpFunction: 'w', // use w instead of webpackJsonp
};
