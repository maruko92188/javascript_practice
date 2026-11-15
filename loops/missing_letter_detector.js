// https://www.freecodecamp.org/learn/javascript-v9/lab-missing-letter-detector/build-a-missing-letter-detector

function fearNotLetter(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(string[0]);
  const endIndex = alphabet.indexOf(string.at(-1));
  const target = alphabet.slice(startIndex, endIndex + 1)

  for (const char of target) {
    if (!string.includes(char)) {
      return char;
    }
  }
  return undefined;
}

// includes()はループのたびに捜索されるのでパフォーマンスが良くない
// アルファベット順は維持されるので、同じインデックスが同じ文字かを確認すれば良い
function fearNotLetter(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(string[0]);
  const endIndex = alphabet.indexOf(string.at(-1));
  const target = alphabet.slice(startIndex, endIndex + 1)  

  for (let i = 0; i < target.length; i++) {
    if (target[i] !== string[i]) {
      return target[i];
    }
  }
  return undefined;
}
