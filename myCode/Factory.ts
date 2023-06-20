import { error } from "console";

class Animal {

    eat() {
        console.log('I Eat!');
    }

}

class Dog extends Animal {

    eat() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    eat() {
        console.log('Meow!');
    }
}

class Whale extends Animal {
    eat() {
        console.log('vrrmmmmmmmmmm');
    }
}

// const d = new Dog();
// const e = d.eat();
// console.log(e);

// const m = new Cat();
// const mi = m.eat();
// console.log(mi);

class AnimalObject {


    createInstance(typeOfAnimal: string) {
        if (Dog) {
            return new Dog();
        } else if (typeOfAnimal === 'cat') {
            return new Cat();
        } else if (typeOfAnimal === 'whale') {
            return new Whale();
        }
    }
}



const factoryClass = new AnimalObject();
const newOne = factoryClass.createInstance('whale')
if (newOne) {
    const result = newOne.eat()
    console.log(result);
} else {
    throw error
}
