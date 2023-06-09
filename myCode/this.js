// 'strict mode'


// const calc = function (birthyear) {
//     console.log(2037 - birthyear);
//     console.log(this);
// }

// calc(1991)

// const calcArrow = (birthyear) => {
//     console.log(2037 - birthyear);
//     console.log(this);
// }

// calc(1991)

// calcArrow(1996)


const jonas = {
    name: 'jonas',
    lastname : 'shmetd',
    job: 'developer',
    function: function() {
        return `${this.name} ${this.lastname}`
    }
}

const obj = {
    name: 'yo',
    lastname: 'show',
}


console.log(jonas.function.call(obj));