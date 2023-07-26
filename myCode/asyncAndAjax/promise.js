// modern AJAX calls using fetch api

// advantages of promise
//we do not need to rely on events and callbacks to handle async operations/results

// build => consume promise to - using promise to get a result
//consuming a promise when we already have a promise such as a promise returned from a fetched api

const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request)

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            return response.json();
        }).then(user => {
        console.log(user.displayName())
    }).catch(error => {
        console.error('error');
    });
}

getCountryData('portugal')

//async await

async function showUserInConsole() {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const user = await response.json();
    console.log(user)
}