//map is a data structure that is used to map values to keys -keys can have any type - convert data to key value pair
//keys always strings - values can be any type

const resturant = new Map();
resturant.set('name', 'italian resturant');
resturant.set('location', '302 street')

console.log(resturant);

console.log(resturant.get('name'));

resturant.set(true, 'we are open');
resturant.set(false, 'we are not');

console.log(resturant.get(true));
console.log(resturant.get(false));
console.log(resturant.has('location'));

resturant.delete('name')
console.log(resturant);


//iteration


const question = new Map([
    ['question', 'what is the best programming language'],
    [1, 'C'],
    [3, 'Java'],
    [4, 'JS'],
    ['correct', 4],
    [true, 'Correct!!'],
    [false, 'try again'],
])

console.log(question);

const obj = {
    firstName: 'man',
    lastName: 'JJ',
}

//convert object to map
const hourMap = new Map(Object.entries(obj))
for (let [key, value] of hourMap) {

    console.log(`the obj is the => ${key}:${value}`);
}


//iteration

for (let [key, value] of question) {
    console.log(`${key}:${value}`);
}

// for (let [one,] of question) {
//     console.log(`the first el is ${one} and the rest is ${question}`);
// }

console.log(...question);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
