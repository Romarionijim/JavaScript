//async await with fetch api
const fetch = require('node-fetch')

const asyncFunc = async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const responeJson = await response.json()
    console.log(response)
    console.log(responeJson)
}

 asyncFunc('portugal')