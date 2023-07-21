const Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
} 

const person1 = new Person('Alice','Wonderland');
console.log(person1);
console.log(person1 instanceof Person);

// prototypes

console.log(Person.prototype);

Person.prototype.printLastName = function() {
    console.log(`the last name is ${this.lastname}`);
}

Person.prototype.randomVariable = 'hello world'

person1.printLastName();
console.log(person1.randomVariable);

console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(person1));