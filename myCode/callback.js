function log(value) {
    console.log(value);
}

function add(num1, num2, logNum) {
    const sum = num1 + num2
    logNum(sum);
}

const adding = add(1, 1, log);
console.log(adding);

console.log('-----------------------------------------------------------------------------------------');

function call() {
    callback();
}

function yes(func) {
    if (func) {
        console.log('yelloo');
    } else {
        console.log('yooo');
    }
}

const check = yes(call)
console.log(check);




const hey = (greeting) => (name) => console.log(`${greeting} ${name}`);

const heyYo = hey('hey')('alex')
console.log(heyYo);