'use strict'

function calcAge(birthyear) {
    const age = 2037 - birthyear;

    function printAge() {
        let output = `${firstname} you are ${age} born in ${birthyear}`
        console.log(output);
        if (birthyear >= 1981 && birthyear <= 1996) {
            const firstname = 'steve'
            var mill = true;
            const str = `and your ${firstname}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'output'
            console.log(output);
        }

        // add(1, 1);

        console.log(mill);
    }
    printAge()
    return age;
}

const firstname = 'Jonas';

console.log(calcAge(1991));