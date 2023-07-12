const map = new Map([
    ['USD', 'united stated dollar'],
    ['EUR', 'euro bill'],
    ['NIS', 'new israel shekel'],
    ['GBP', 'greate britian pound'],
])

map.forEach((el, key, map) => {
    console.log(` the map key is ${key} and the value is ${el} `);
})

console.log('-------------sets--------------');

const set = new Set(['USD', 'EUR', 'NIS', 'GBP']);

set.forEach((value, key, set) => {
    console.log(`${key}:${value}`);
})