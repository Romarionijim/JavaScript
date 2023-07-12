const arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    avg = sum / 2;
}

console.log(sum);
console.log(avg);

const obj = {
    one: 1,
    two: 2,
    three: 3,
}

let sum1 = 0
let avg1;
for (let key in obj) {
    sum1 = sum1 + obj[key];
    avg1 = sum1 / 2
}

console.log(sum1);
console.log(avg1);


let sum3 = 0;
let avg3;
const objVal = Object.values(obj);
for (let i of objVal) {
    sum3 = sum3 + i
    avg3 = sum3 / 2
}

console.log(`obj sum is ${sum3}`);
console.log(avg3);



const game1 = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 3,
        x: 3.25,
        team2: 6.5,
    },

    // scorers: {
    //     Gnarby: 1,
    //     Hummels: 1,
    //     Lewandowski: 2
    // }
};


let sum4 = 0
let avg4;
const objVal1 = Object.values(game1['odds']);

for (let i of objVal1) {
    sum4 = sum4 + i;
    avg4 = sum4 / 2
}

console.log(avg4);

let add = 0
let avgAdd
const obj4 = game1['odds']
for (let num in obj4) {
    add = add + obj4[num];
    avgAdd = add / 2
}

console.log(avgAdd);


const objEntery = Object.entries(game1['odds']);
for (let [key, value] of objEntery) {
    console.log(`The odd value of ${key} key is ${value}`);
}

(game1['scorers'] in game1) ? true : game1['scorers'] = {
    Gnarby: 1,
    Hummels: 2,
    Lewandowski: 3
}

const scorerObj = Object.entries(game1['scorers']);
for (let [scorer, goal] of scorerObj) {
    console.log(`the scorer is ${scorer} and scored ${goal} goals`);
}


const newObj = {
    name1: 's',
    age: 30,
    city: 'NY',
}


const { name1, age: el, city } = newObj
console.log(name1);
console.log(el);
console.log(city);


// for(let key in game1) {
//     if(typeof game1[key] === 'object')
//     console.log(Object.values(game1[key]));
// }

for (let [player1, player2] of Object.values(game1['players'])) {
    console.log(`yoo ${player1}, ${player2}`);
}

const [player3, player4] = game1['players']
console.log(player3, player4);

const [firstPlayersArray] = game1['players']
const [gk, ...players] = firstPlayersArray
console.log(`goal keeper is: ${gk} and the rest are ${players}`);

const allPlayers = [...player3, ...player4];
console.log(allPlayers);

const playersFinal = [...player3, 'cj', ',miles', 'llillard']
console.log(playersFinal);

const c = 1 + '1'
console.log(c);


const scoredPlayers = Object.entries(game1['scored']);
for (let [index, player] of scoredPlayers) {
    console.log(`${Number(index) + 1}.${player}`);
}

const teamX = Object.entries(game1['odds']);
for (let [team, score] of teamX) {
    const str = team === 'x' ? 'draw' : 'win'
    console.log(`the team is "${team}" which had a ${str} and their score is ${score}`);
}