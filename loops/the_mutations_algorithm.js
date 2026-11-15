// https://www.freecodecamp.org/learn/javascript-v9/lab-mutations/implement-the-mutations-algorithm

function mutation(words) {
  const criterion = words[0].toLowerCase();
  const target = words[1].toLowerCase();

  for (const char of target) {
    // 文字列にもincludesが使える
    if (!criterion.includes(char)) {
      return false;
    }
  }
  return true;
}
