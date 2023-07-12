const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1 , -2 , -3];

const checkEveryArrayIsPositive = arr.every(el => el > 0);
console.log(checkEveryArrayIsPositive);

const checkAtLeastOneElementIsPositive = arr.some(el => el > 0);
console.log(checkAtLeastOneElementIsPositive);
if(checkAtLeastOneElementIsPositive) {
    console.log('yooooo');
} else {
    console.log('noooooooo');
}