import sound from './sound';
import sleep from './sleep';
export default async (length, ...key) => {
  const fadeTime = 100;
  for (const k of key) {
    setTimeout(
      id => {
        sound.fade(1, 0, fadeTime, id);
      },
      length,
      sound.play(k)
    );
  }
  await sleep(length - fadeTime);
};
