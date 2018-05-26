// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Sprite, Stage } from 'react-pixi-fiber';
// import * as PIXI from 'pixi.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   withRouter,
// } from 'react-router-dom';

// class App extends React.Component {
//   render() {
//     return (
//       <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
//       </Stage>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

const audioSprite = document.getElementById('audio');
const spriteData = {
  a: {
    start: 0,
    length: 4,
  },
  b: {
    start: 4,
    length: 4,
  },
};

audioSprite.currentTime = spriteData.a.start;
// audioSprite.play();
