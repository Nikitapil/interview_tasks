/*
Есть функция, которую надо переделать чтобы вывод в консоль был в таком порядке start setTimeout end

(function() {

    function create() {
        setTimeout(function() {
            console.log('setTimeout');
        }, 1000);
    }

    console.log('start');

    create();

    console.log('end');

    // start setTimeout end
})()
 */

// Ответ

(async function() {

  function create() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log('setTimeout');
        resolve()
      }, 1000);
    })
  }

  console.log('start');

  await create();

  console.log('end');

  // start setTimeout end
})()