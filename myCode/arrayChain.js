const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const example = movements
    .filter(move => move > 0)
    .map(move => move * eurToUsd)
    .reduce((acc, move) => acc + move, 0)
console.log(example);

const random = 2
const movement2 = movements.filter((el, index, arr) => el > 200)
    .map(el => el * 2)
    .reduce((acc, el) => acc + el);
console.log(movement2);
console.log(movements);