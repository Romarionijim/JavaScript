const movements = [200, 200];

// const numbers = [5,5];

// const sum = numbers.reduce((one, two) => one + two)
// console.log(`sum is ${sum}`);

const balance = movements.reduce((accum, current) => accum + current)
const avg = balance / movements.length
console.log(balance);
console.log(avg);