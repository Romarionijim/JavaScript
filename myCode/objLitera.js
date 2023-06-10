'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const fakeObj = {
    name: 'fake',
    age: 'fake age',
}

const myObj = {
    profession: 'Automation',
    fakeObj,
}

console.log(Object.entries(myObj));

const firstName = 'John';
const lastName = 'Doe';

const johnObj = {
    firstName,
    lastName,
    func: function () {
        console.log(`The name is ${this.firstName} and the last name is ${this.lastName}`);
    }
}


console.log(johnObj.func());
