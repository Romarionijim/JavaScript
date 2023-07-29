// //async await with fetch api
// const fetch = require('node-fetch')
//
const asyncFunc = async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const responeJson = await response.json()
    console.log(response)
    console.log(responeJson)
}

(async () => {
    await asyncFunc('portugal')
})


async function doSomething() {
    console.log('log the async function!!')
}


async function anotherFunc() {
    await doSomething();
    console.log('logging the async from another function')
}

await anotherFunc();
