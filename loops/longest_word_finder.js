// https://www.freecodecamp.org/learn/javascript-v9/lab-longest-word-in-a-string/build-a-longest-word-finder-app

function findLongestWordLength(sentence) {
  const words = sentence.trim().split(" ");
  // 再代入しないのでconstにするべき
  let wordLength = new Array();

  for (const word of words) {
    wordLength.push(word.length);
  }
  return Math.max(...wordLength);
}

// 配列を使わない場合
function findLongestWordLength(sentence) {
  const words = sentence.trim().split(" ");
  let wordLength = 0;

  for (const word of words) {
    if (word.length > wordLength) {
      wordLength = word.length
    }
  }
  return wordLength;
}
