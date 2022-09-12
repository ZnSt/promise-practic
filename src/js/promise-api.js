const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно с результатом');
    }
    reject('Промис выполнился с ошибкой');
  }, 1000);
});

function onFullfield(result) {
  console.log(result);
}

function onReject(error) {
  console.log(error);
}

// Цепочки промисов
promise
  .then(onFullfield)
  .then(x => {
    console.log(x);
    return 5;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду выполнен в любом случае'));
