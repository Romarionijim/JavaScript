const obj = {
    first: 'john',
    last: 'doe',
    func() {
        console.log(`the first name is ${this.first} and the lastname is ${this.last}`);
    }
}

const person1 = Object.create(obj);
console.log(person1.first);
console.log(person1.last);
console.log(person1.func());
console.log('------------');
console.log(person1.__proto__);
console.log(obj.isPrototypeOf(person1));
console.log(person1.__proto__ === obj);