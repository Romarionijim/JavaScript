const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//map => creates a brand new array absed on the original array - similar to foreach

const euroToUsd = 1.1;
const eurUsd = movements.map((el) => {
    return el * euroToUsd
})

const example = movements.map(el => el * euroToUsd)
console.log(eurUsd);
console.log(`original array ${movements}`);

console.log(`the example is ${example}`);

const newArr = movements.map((el, i, map) => 
    `the movement at index ${i}: you ${el > 1 ? `you deposited ${el}` : ` you withdrew ${Math.abs(el)}`}`
)

console.log(newArr);

//filter => filter for elements in the original array that satisfies a certain condition, returns a new array

//reduce => reduces all elements together


const randomName = 'Steve Williams';
randomName.split(' ').map(el => console.log(el.toUpperCase()))
console.log(randomName);



