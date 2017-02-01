import React from 'react';
import { render } from 'react-dom';

import './main.styl';

const webpack2Url = 'https://webpack.js.org/';
const target = document.querySelector('.app');
// const app = (props) => (
//   <a target='_blank' href={webpack2Url}>meet webpack 2</a>
// );
//
// render(React.createElement(app), target);

render(
  <a
    href={webpack2Url}
    target='_blank'
    onClick={e => {
      e.preventDefault();
      System.import('./modules/some-module.js').then(someModule => {
        console.log(`received module: ${JSON.stringify(someModule.db)}`);
        someModule.default('ES6 modules success!'); // because of export default ...
        console.log(`module ${someModule.name} is updated`);
      });
    }}>
      <div>webpack 2 and lazy loading using ES6 modules</div>
    </a>,
  target
);
