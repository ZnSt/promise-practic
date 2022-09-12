const horses = ['Tilda', 'Mad', 'Killian', 'Joseph', 'Moorley'];

function run(hourse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve(hourse, time);
    }, time);
  });
}
run('Mango')
  .then(x => console.log(x))
  .catch(y => console.log(y));

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
