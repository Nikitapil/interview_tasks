// В каком порядке будут выведены console.log и почему?

console.log('start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise
  .resolve()
  .then(() => console.log('promise1'))
  .then(() => console.log('promise2'));

console.log('end');

// Ответ start end promise1 promise2 setTimeout