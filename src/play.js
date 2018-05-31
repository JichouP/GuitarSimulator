import sound from './sound';
import sleep from './sleep';
export default async (length, ...key) => {
  const fadeTime = 100;
  for (const k of key) {
    const id = sound.play(k);
    sound.fade(0, 1, 50, id);
    setTimeout(
      id => {
        sound.fade(1, 0, fadeTime, id);
      },
      length - fadeTime / 2,
      id
    );
  }
  await sleep(length);
};
