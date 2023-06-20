const obj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
}

for (let name1 of Object.entries(obj)) {
    console.log(name1);
}

console.log('//#########keys');

for (let name1 of Object.keys(obj)) {
    console.log(name1);
}

console.log('//#########values');

for (let name1 of Object.values(obj)) {
    console.log(name1);
}


