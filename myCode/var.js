// console.log(dog)
// var dog = 'Buck'


// let arr = [1, 2, 3, 4]
// let man = arr.splice(1, 0, 'ym', 'h')
// console.log(arr);

// let br = [1, 2, 3, 4]
// let del = br.splice(3, 2, 5)
// console.log(br)
// console.log('---------')
// console.log(del)


// let rr = []
// rr[100] = 'r'

// console.log(rr);

// let findArr = [1, 2, 3, 5, 7]
// let find1 = findArr.filter(el => el > 3)
// console.log(find1)

// function comp() {
//     let countnum = [1, 2, 3, 4, 5, 5];
//     let count = 0
//     for (let i = 0; i < countnum.length; i++) {
//         if (countnum[i] === 5) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(comp());

// let lastIndex = [1,2,3,4]
// let b = lastIndex.indexOf(1);
// console.log(b)


// function sum() {

//     let sum = 0
//     let nums = [10, 20, 30, 40, 50];
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }

//     return sum / nums.length
// }

// console.log(sum())


//function only getts two numbers 5 + 7
// function is not allowed to have condition statement
//set up a function with an input
//if the function gets 5 then it should output 7 and if it got 7 then it should 
//out put 7

let returnFiveOrSeven = (number) => {
    return 35 / number;
}

// console.log(returnFiveOrSeven(5));
// console.log(returnFiveOrSeven(7));

let returnIndex = (num) => {

    let arr =[0, 0, 0, 0, 0, 7, 0, 5];
    let tempArr = arr[num]
    return tempArr
}

// console.log(returnIndex(7));


function returnOpposite(num) {
    const transfer = {
        5:7,
        7:5,
    }

    return transfer[num] || num
}

console.log(returnOpposite())


function abs(num) {
    return Math.abs(num - 7 ) + 5
}

console.log(abs(5));

