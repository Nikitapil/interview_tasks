// Написать функцию которая принимает на вход результирующее число и массив, нужно найти в массиве 2 числа которые в сумме выдадут рузультирующее число

// Решение

const findSumInArray = (res, arr) => {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const diff = res - current;
    if (map.has(diff)) {
      return [diff, current];
    }
    map.set(current, true)
  }

  return null
}

console.log(findSumInArray(17, [3, 1, 7, 10, 3]))