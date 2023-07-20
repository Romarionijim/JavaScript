const date = new Date();
const day = `${'0' + date.getDay()}-${'0' + (date.getMonth() + 1 )}-${date.getFullYear()}`
console.log(day);
 