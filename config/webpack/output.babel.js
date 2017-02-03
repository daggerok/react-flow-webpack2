import { pathTo } from './resolve.babel';

export const publicPath = '/';

export default {
  publicPath,
  path: pathTo('./dist'),
  // filename: '[name]-[hash].js',
  // sourceMapFilename: 'maps/[name]-[hash].map',
  // chunkFilename: '[id].chunk.js?ver=[chunkhash]',
  filename: '[name].bundle.js?ver=[chunkhash]',
  sourceMapFilename: '[name].map?ver=[chunkhash]',
  chunkFilename: 'app.chunk.[id].js?ver=[chunkhash]',
  jsonpFunction: 'w', // use w instead of webpackJsonp
};
