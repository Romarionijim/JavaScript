const p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('res')
    }, 1000),
);

const p2 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve({status: 'ok'})
    }, 2000),
);

const p3 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve(1000)
    }, 3000),
);


Promise.all([p1, p2, p3]).then(([result1, result2, result3]) => {
    console.log(result1);
    console.log(result2)
    console.log(result3)
}).catch((error) => {
    console.log(error)
})