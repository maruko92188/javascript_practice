// https://www.freecodecamp.org/learn/javascript-v9/lab-longest-word-in-a-string/build-a-longest-word-finder-app

function findLongestWordLength(sentence) {
 const words = sentence.trim().split(" ");
 let wordLength = new Array();

  for (const word of words) {
    wordLength.push(word.length);
  }
  return Math.max(...wordLength);
}
