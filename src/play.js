import sound from './sound';
export default (length, ...key) => {
  for (const k of key) {
    setTimeout(
      id => {
        sound.fade(1, 0, 100, id);
      },
      length,
      sound.play(k)
    );
  }
};
