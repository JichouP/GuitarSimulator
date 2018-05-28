import play from './play';

export default (bpm, beat, rhythm, ...chord) => {
  const length = 60 * 1000 / bpm / beat * 2;
  let count = 0;
  for (let i = rhythm.length - 1; i >= 0; i--) {
    if (eval(rhythm[i])) {
      setTimeout(
        play,
        length * i + 500,
        length * (count + 1),
        ...chord
      );
      count = 0;
    } else {
      count++;
    }
  }
};
