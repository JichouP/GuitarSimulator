import play from './play';

export default async (bpm, beat, rhythm, ...chord) => {
  const beatLength = 60 * 1000 / bpm / beat * 2;
  const length = [];
  for (let i = rhythm.length - 1, count = 0; i >= 0; i--) {
    if (eval(rhythm[i])) {
      // setTimeout(play, beatLength * i + 1000, beatLength * (count + 1), ...chord);
      length.unshift(count + 1);
      count = 0;
    } else {
      length.unshift(0);
      count++;
    }
  }
  for (let i = 0; i < rhythm.length; i++) {
    if (eval(length[i])) {
      await play(beatLength * (length[i] + 1), ...chord);
    }
  }
};
