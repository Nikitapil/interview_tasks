// Есть лестница с n количеством ступенек, за раз можно перешагнуть 1 или 2 ступеньки
// Как много способов есть забраться на лестницу

const climbingStairs = (n) => {
  if (n === 1 || n === 2) {
    return n
  }
  const arr = [1, 2]

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

console.log(climbingStairs(2)) // 2
console.log(climbingStairs(3)) // 5
console.log(climbingStairs(5)) // 13