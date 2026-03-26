// Лан массиа чисел и целевое значение значение target
// Нужно найти индексы двух чисел, которые в сумме дают target

const numsSum = (nums, target) => {
  const map = new Map();
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num
    if (map.has(diff)) {
      result.push([map.get(diff), i])
    } else {
      map.set(num, i)
    }
  }

  return result;
}

console.log(numsSum([1, 2, 3, 4], 5))