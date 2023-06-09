const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

console.log(...newArr);


const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const merge = [...arr1.concat(...arr2)]
const newWay = [...arr1, ...arr2];

console.log(`merge => ${merge}`);
console.log(`new way => ${newWay}`);

const nameA = 'Jonas';
const element = [...nameA];
console.log(element);
console.log(...element);

function spread(one, two, three) {
    
}