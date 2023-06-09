//rest is the opposite of the spread operator
// spread operator unpacks an array
//while rest operator is to pack elements into an array

//spread
const arr = [1, 2, 3];
const spread = [...arr];
console.log(spread);
console.log(...spread);

//rets elft side of assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

function retunIt(a, b, ...otherInfo) {
    return otherInfo;
}

console.log(retunIt('a', 'b', 'c', 'd', 'e'));


function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum
}

const x = [11, 11];
console.log(add(...x));



