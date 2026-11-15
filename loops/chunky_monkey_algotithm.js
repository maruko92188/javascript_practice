// https://www.freecodecamp.org/japanese/learn/javascript-v9/lab-chunky-monkey/implement-the-chunky-monkey-algorithm

// 配列の要素をsizeごとに分割する
function chunkArrayInGroups(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// rubyで書くと…
def chunk_array_in_groups(array, size)
  array.each_slice(size).to_a
end
