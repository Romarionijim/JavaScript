const personPrototype = {
    age: Number,
    movie: String,
    greet() {
        console.log(`my name is ${this.name} and my hobbie is ${this.hobbie}`);
    }
}

const person1 = Object.create(personPrototype);
person1.name = 'Alice'
person1.hobbie = 'Tennis'

const person2 = Object.create(personPrototype);
person2.name = 'Mike'
person2.hobbie = 'Basketball'

console.log(person1.greet());
console.log(person2.greet());

