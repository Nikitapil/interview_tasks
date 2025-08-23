/*
Дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа,
которые можно получить путем перестановки цифр их составляющих
 */

const digitPermutation = (arr) => {
  const map = {}
  return arr.reduce((acc, item) => {
    const sortedString = item.toString().split('').sort().join('');
    const foundIndex = map[sortedString]
    if (foundIndex !== undefined) {
      acc[foundIndex].push(item);
    } else {
      acc.push([item]);
      map[sortedString] = acc.length - 1;
    }
    return acc
  }, []);
}

// Проверки
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9])); // [[199, 991], [110001, 101010], [1230, 2301, 1230, 3021], [9]]
console.log(digitPermutation([11, 22])) // [[11], [22]]
console.log(digitPermutation([11, 11, 11])) // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 122222222222])) // [[111111111112], [122222222222]]