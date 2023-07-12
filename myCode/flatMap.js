const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = arr.flat();
console.log(flat);

const arr1 = [[[1, 2, 3], [4, 5, 6]], [7, 8, 9]];
const flatDeep = arr1.flat(1)
console.log(flatDeep);