import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import { publicPath } from './output.babel';
import { extractTextWebpackPlugin } from './plugins.babel';
import { pathTo } from './resolve.babel';

const exclude = /(node_modules|bower_components)/;
const loader = extractTextWebpackPlugin.extract({
  publicPath,
  fallbackLoader: 'style-loader',
  loader: 'css-loader?importloader=1!postcss-loader?sourceMap=inline!stylus-loader',
});

export default {
  rules: [
    {
      test: /\.js$/i,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'stage-0',
          'react',
        ],
        plugins: [
          'transform-class-properties',
          'react-html-attrs',
        ],
      },
      include: pathTo('./src'),
      exclude,
    },
    {
      test: /\.(styl|css)$/i,
      loader,
      include: [
        pathTo('./src'),
        pathTo('./node_modules/normalize.css/'),
      ],
      exclude,
    },
    {
      test: /\.css$/i,
      loader,
      include: exclude,
    },
  ],
};
