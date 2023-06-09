//primitives call stack vs heap

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);


const jessica = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica['lastName'] = 'Davis'

console.log(jessica);
console.log(marriedJessica);

//copy objects

const jessica2 = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy['lastName'] = 'Davis'

console.log(jessica2);
console.log(jessicaCopy);

