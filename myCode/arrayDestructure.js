'use strict';

// breaking down large DS into smaller DS such as variables 

const resturant = {
    name: 'classico italiano',
    location: 'italy',
    catigories: ['italian, pizza,', 'viggie', 'pasta'],
    mainMenu: ['fish', 'checkin', 'vegg'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    }
}


const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];


const [x, y, z] = arr

console.log(x, y, z);

let [first, , second] = resturant['catigories']

console.log(first, second);

[first, second] = [second, first]

console.log(first, second);


const nested = [1, 2, [5, 7]];
const [i, j, [c, k]] = nested;

console.log(i, j, c, k);




const { name, openingHours, catigories } = resturant
console.log(name, openingHours, catigories);

const { name: rest, openingHours: hrs, catigories: category } = resturant
console.log(rest, hrs, category);

let a = 1000;
let b = 2000
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj)
console.log(a, b);

//nested

const { fri: { open: bb, close: oo } } = openingHours
console.log(bb, oo);
