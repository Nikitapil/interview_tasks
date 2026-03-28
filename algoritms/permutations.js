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

const combinations = (arr, k) => {
  const result = [];

  const backtrack = (start = 0, current = []) => {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i+1, current);
      current.pop()
    }
  }

  backtrack()
  return result
}

console.log(combinations([1, 2, 3], 2));