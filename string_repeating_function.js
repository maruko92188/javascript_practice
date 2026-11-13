// https://www.freecodecamp.org/learn/javascript-v9/lab-repeat-a-string/build-a-string-repeating-function

function repeatStringNumTimes(str, num) {
  let result = ""
  if(num <= 0) {
    return result;
  } else {
    for(let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
}
