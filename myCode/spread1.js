const arr = [1,2,3];
const newArr = [...arr,4,5];
console.log(newArr);



console.log('----------------rest---------------');

function rest(first,second, ...rest) {
    return rest
}

console.log(rest('first','second','third','fourth'));