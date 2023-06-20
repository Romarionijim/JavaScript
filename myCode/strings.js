const airline = 'Tap AIR flight 001'

function checkMiddleSeat(seat) {
    const sliceSeat = seat.slice(-1);
    if (sliceSeat === 'B' || sliceSeat === 'E') {
        console.log('middle');
    } else {
        console.log('not middle');
    }
}

checkMiddleSeat('234B');
checkMiddleSeat('234F');
checkMiddleSeat('23E');


const jonasName = 'jOnAs';
const nameLower = jonasName.toLocaleLowerCase();
const correctName = `the name is ${nameLower[0].toUpperCase() + nameLower.slice(1)}`;
console.log(correctName);

const replaceOne = 'STR11';
const changeOne = replaceOne.replace('ST', 'OS');
console.log(changeOne);

const announcement = 'all passengers come to boarding door 23 . boarding door 23!'
const replaceIt = announcement.replaceAll('door', 'gate')
const regeXreplace = announcement.replace(/door/g, 'more')
console.log(replaceIt);
console.log(regeXreplace);

const B = 'Air Flight K'
if (B.startsWith('Air') && B.endsWith('K')) {
    console.log('brrrrrrr');
}

const stringONe = ' a+very+nice+string';
console.log(stringONe.split('+').join(' '));
const arr = ['1', '2', '3', '4'];
console.log(arr.join(' '));

const weather = '...weather...'
console.log(weather.repeat(5));


//===============================================================================


const arr1 = ['hello', 'world', 'whatsapp', 'man', 'camelcase'];
for (let i = 0; i < arr1.length; i++) {
    const arrStr = arr1[i]
    const divide = Math.floor(arrStr.length / 2);
    const firstHalf = arrStr.slice(0, divide);
    const secondHalf = arrStr.slice(divide);
    const str = firstHalf + secondHalf[0].toLocaleUpperCase() + secondHalf.slice(1)
    console.log(str);
}


const padStr = 'hello'
const pad = padStr.padStart(11, '+++');
const apd = padStr.replace('hello', '').padEnd(3, '+++')
console.log(pad + apd);



const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCOde = str => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const outPut = `${type.startsWith('_Delayed') ? 'O' : ' '}${type.replaceAll('_', ' ')} from ${getCOde(from)} to ${getCOde(to)} in ${time.replaceAll(':', 'h')}`.padStart(40)
    console.log(outPut);

}

