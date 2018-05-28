(function() {
  /**
   * copyText
   * @param {*} text 
   */
  function copyText(text) {
    const temp = document.createElement('textarea');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    const ret = document.execCommand('copy');
    document.body.removeChild(temp);
    return ret;
  }
  let text = '';
  const key = [
    "'A",
    "'A#",
    "'B",
    "'C",
    "'C#",
    "'D",
    "'D#",
    "'E",
    "'F",
    "'F#",
    "'G",
    "'G#",
  ];
  const number = ["2'", "3'", "4'", "5'", "6'", "7'"];
  const keys = Array.prototype.concat.apply(
    [],
    number.map(e => key.map(f => f + e))
  );
  let time = -12000;
  const length = 4000;
  for (const e of keys) {
    text += `${e}:[${time},${length}],`;
    time += 4000;
  }

  if (copyText(keys)) alert('コピーしました');
})();
