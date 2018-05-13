import React from 'react';
import { render } from 'react-dom';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
// import App from './app';
const kussy = './res/kussy.jpg';

const Kussy = props => (
  <Sprite texture={PIXI.Texture.fromImage(kussy)} {...props} />
);

render(
  <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
    <Kussy x={100} y={100} />
  </Stage>,
  document.getElementById('root')
);
// render(<App />, document.getElementById('root'));
