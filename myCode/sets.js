//sets colelction of unique values - cannot have duplciates 

const order = new Set(['Pasta','Pasta', 'Pizza', 'Resotto']);

console.log(order);
console.log(order.size);

console.log(order.has('Pasta'));
console.log(order.has('Brad'));

order.add('Garlic');
order.add('Garlic');
order.add('Salmon');

console.log(order);

order.delete('Pizza');
console.log(order);
// order.clear();
// console.log(order);


for(let el of order) {
    console.log(el);
}