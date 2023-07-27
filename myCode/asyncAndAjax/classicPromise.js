let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) {
        resolve('success')
    } else {
        reject('wrong answer')
    }
})
promise.then((message) => {
    console.log('this is a then to continue')
}).catch((error) => {
    throw new Error('error')
})

//promise with timeout

let promiseTimeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = 1 + 1
        if (number === 3) {
            resolve('success!')
        } else {
            reject('wrong! promise rejected')
        }
    }, 1000)
})
promiseTimeOut.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(`oop! something went wrong! => ${error}`)

})