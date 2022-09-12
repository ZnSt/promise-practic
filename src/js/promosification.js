// Промисификация асинхронного кода
// const makeOrder = dish => {
//   const DELAY = 1000;
//   const promise = new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve(`вот ваш заказ: ${dish}`);
//       }
//       reject('извините продукты закончились');
//     }, DELAY);
//   });
//   return promise;
// };
// makeOrder('Пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log(error);
// }

// Промисификация синхронного кода
// const makeOrder = dish => {
//   return Promise.resolve(`Вот ваш заказ: ${dish}`);
// };
// makeOrder('Пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log(error);
// }

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };
// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log(error);
// }

const makePromise = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    if (passed) {
      resolve('this is resolve');
    }
    reject('error!!!');
  });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));
