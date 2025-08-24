/*
Необходимо написать async-функцию, которая на вход принимает url,
асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
Для получении данных можно использовать fetch.
Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".

Пример вызова get(url)
  .then(res => console.log(res))
  .catch(err => console.error(err))
 */

const get = (url) => {
  let retries = 0;

  const internalFetch = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    } catch (e) {
      if (retries === 5) {
        throw new Error('Заданный URL недоступен')
      } else {
        retries++
        return internalFetch()
      }
    }
  }

  return internalFetch();
}