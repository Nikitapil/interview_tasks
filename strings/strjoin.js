// Нужно написать функцию strjoin, которая склеивает строки через разделитель? который передается первым аргументом функции
const strjoin = (delimeter, ...params) => params.join(delimeter);

// Примеры
console.log(strjoin('.', 'a', 'b', 'c')); //'a.b.c'
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')); //'a-b-c-d-e-f'

