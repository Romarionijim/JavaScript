const age = [10, 20, 30, 40];
const random = age
    .filter(el => el > 18)
    .reduce((acc, el) => (acc + el) / age.length,0)
console.log(random);
