const num = '11';
const num2 = 11
const sum = num - num2
console.log(sum);

const str = '30'
console.log(typeof str === 'string');
const parse = parseInt(str)
console.log(typeof parse === 'number');
console.log(parse);

const px = '30px'
const parseit = parseInt(px);
console.log(`parsing without px ${parseit}`);

const px1 = '31.44'
const parseit1 = parseInt(px1);
console.log(parseit1);


const px11 = '31.44';
const parseit11 = parseFloat(px11);
console.log(parseit11);