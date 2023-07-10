const obj = {
    first_name: 'Rom',
    last_name: 'Nij',
    func: function (message) {
        console.log(`${this.first_name} ${this.last_name}`);
    }

}


for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`);
}



const person = {
    first: 'John',
    lastName: 'Doe',
}

for (let [first, last] of Object.entries(person)) {
    console.log(`the key is "${first}" and value is ${last}`);
}

const { first, lastName } = person
console.log(`firstname is ${first} and lastname is ${lastName}`);



function logObj({ first, lastName }) {
    console.log(`the name issss is ${first} and the last issss ${lastName}`);
}

logObj(person);