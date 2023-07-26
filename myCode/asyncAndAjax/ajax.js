//base url https://countries-api-836d.onrender.com/countries/

'use strict'

const button = document.querySelector('.btn-country');
const contriesContaner = document.querySelector('.countries');

/////////////////

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request.send();
console.log(this.responseText);

request.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText)
    console.log(data);
}) 