import React from 'react';
import ReactDOM from 'react-dom';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
// import App from './app';
const kussy = './res/kussy.jpg';
// import kussy from '../dist/res/kussy.jpg';

const Kussy = props => {
  return (
    <Sprite
      texture={PIXI.Texture.fromImage(kussy)}
      {...props}
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
        <Kussy x={100} y={100} />
      </Stage>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
