//React
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
//sound
// import { Howl, Howler } from 'howler';
// import posToKey from './posToKey';
// import play from './play';
import 'babel-polyfill';
import beat from './beat';
import Chord from './chord';
import sleep from './sleep';

const chord = new Chord();
// play(4000, posToKey(1, 0), posToKey(2, 0), posToKey(3, 0), posToKey(4, 0), posToKey(5, 0), posToKey(6, 0));

(async () => {
  await sleep(1000);
  await beat(120, 8, '10110111', ...chord.C);
  await beat(120, 8, '10110111', ...chord.Am);
  await beat(120, 8, '10110111', ...chord.F);
  await beat(120, 8, '10110111', ...chord.G);
  await beat(120, 8, '10110111', ...chord.Em);
  await beat(120, 8, '10110111', ...chord.Am);
  await beat(120, 8, '10110111', ...chord.F);
  await beat(120, 8, '10110111', ...chord.G);
})();

// audioSprite.currentTime = spriteData.a.start;
// audioSprite.play();
