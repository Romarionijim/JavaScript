const obj = {
    first_name: 'Rom',
    last_name: 'Nij',
    func: function (message) {
        console.log(`${this.first_name} ${this.last_name}`);
    }
}

const hello = obj.func()
console.log(`hey ${hello}`);
const hello1 = obj.func.bind(obj)
hello1();

const obj2 = {
    first_name: 'John',
    last_name: 'Doe'
}

const obj3 = {
    first_name: 'Jane',
    last_name: 'Doe'
}

obj.func.call(obj2, 'sponge', 'pank', 'flank')
obj.func.call(obj3)

obj.func.apply(obj2, ['boom', 'beem', 'baam'])
obj.func.bind(obj2)


const person = {
    name: 'John',
    greet: function(message) {
        console.log(message);
        console.log(`${message}, ${this.name}!`);
    }
};

const sayHello = person.greet.bind(person, 'Hello');
sayHello(); // Output: "Hello" and "Hello, John!"

const hello2 = obj.func.bind(obj2)
hello2();

