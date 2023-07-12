let arr = ['a', 'b', 'c', 'd', 'e'];
//slice returns new array - does not update the original array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log([...arr]);
console.log(arr);
//splice mutates the array - chanegs the original array

// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1,2));
// console.log(arr);
console.log(`[${arr.join(' -- ')}]`);