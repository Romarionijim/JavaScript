import { Page } from "@playwright/test";

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

function getInstanceOfFactory(instanceMethod: () => Page): Page {
    switch(instanceMethod) {
        case BasePage.static
    }
}