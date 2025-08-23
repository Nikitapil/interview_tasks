/* Реализовать функцию resolver, На вход которой поступает массив промисов, а на выходе новый промис, работающий по следующим правилам:
1) Если в массиве есть успешо выполняемый промисс - возвращаем новый промисс с результатом этого промиса.
2) Если массив состоит только из промисов, которые завершаются с ошибкой то необходимо вернуть новый промис, где в reject передаем массив ошибок всех промисов
Т.е. задача аггрегировать все ошибки массива промиссов в один промисс.

Примеры:

resolver([Promise.reject(2), Promise.resolve(5)]) - Promise => 5
resolver([[Promise.reject(2), Promise.reject(5)]]) - Promise => Errors([2, 5])

Начальное условие
const resolver = () => {}
 */

// Решение
const resolver = async (promises) => {
  try {
    return await Promise.any(promises);
  } catch (e) {
    return Promise.reject(e.errors)
  }
}

// Проверка
resolver([Promise.reject(2), Promise.resolve(5)]).then(result => console.log(result)) //5
resolver([Promise.reject(2), Promise.reject(5)]).catch(e => console.log(e)) // [2, 5]