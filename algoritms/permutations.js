const permutations = (arr) => {
  const result = [];

  const backtrack = (start = 0) => {
    if (start === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // обмен местами
      backtrack(start+1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  backtrack()
  return result
}

console.log(permutations([1, 2, 3]));