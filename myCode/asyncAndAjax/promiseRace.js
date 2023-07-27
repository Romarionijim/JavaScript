const p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('rejected')
    }, 3000),
);

const p2 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve({status: 'ok'})
    }, 2000),
);

const p3 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve(1000)
    }, 1000),
);


Promise.race([p1, p2, p3]).then((result1) => {
    console.log(result1);

}).catch((error) => {
    console.log(error)
})
