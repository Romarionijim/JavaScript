const numbers = [1, 2, 3, 4, 5, -200, -300];

numbers.filter(el => console.log(el > 3));
const yo = numbers.filter((el) => el > 2);
console.log(`yoooo ${yo}`);

const so = numbers.find((el) => {
    return el > 1
});
console.log('--------find----------');
numbers.find(el => console.log(el > 3));
console.log(yo);
console.log('--------find----------');
console.log(so);

const b = numbers.filter((el) => el < 1).map((el) => Math.abs(el))
console.log(b);

