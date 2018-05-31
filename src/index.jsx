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
import beat from './beat';
import Chord from './chord';
const chord = new Chord();
// play(4000, posToKey(1, 0), posToKey(2, 0), posToKey(3, 0), posToKey(4, 0), posToKey(5, 0), posToKey(6, 0));

beat(120, 8, '10001011011010111000101101101011', ...chord.AM7);

// audioSprite.currentTime = spriteData.a.start;
// audioSprite.play();
