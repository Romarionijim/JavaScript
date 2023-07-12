let arr = [200, 450, -400, 3000, -650, -130, 70, 1300];


for(let [i,value] of arr.entries()) {
    if(i > 0) {
        console.log(`you deposited at index ${i}: ${value}`);
    } else {
        console.log(`you withdrew ${i}:${value}`);
    }
}

console.log('-----------------------------forEach-------------------------------');

arr.forEach((mov, index, array) => {
    if(mov > 0) {
        console.log(`you deposited at index ${index}: ${mov}`);
    } else {
        console.log(`you withdrew ${index}:${mov}`);
    }
})