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
};


//   const keys = Object.keys(game1)
//   const val = Object.values(game1)
//   const enter = Object.entries(game1)
// //   console.log(keys);
// //   console.log(val);
// //   console.log(enter);

//   keys.forEach((key, value) => {
//     console.log(`${key}:${game1[key]}`);
//   })


// const scored = Object.values(game1['scored']);
// console.log(scored);

// for (const [i, player] of game1.scored.entries())
//     console.log(`Goal ${i + 1}: ${player}`);


// console.log(Object.entries(game1['scored']));
// console.log(game1.scored.entries());
//1
// const scored1 = Object.entries(game1['scored']);
// for(let [i,player] of scored1) {
//     console.log(`the player is: ${Number(i) + 1}: ${player}`);
// }

//2

// const oddsEntries = Object.entries(game1['odds']);
// for(let [key, value] of Object.entries(game1['odds'])) {
//     console.log(`key: ${key} and value : ${value}`);
// }

// const s = game1['odds']
// for (let key in s) {
//     if (s.hasOwnProperty(key) && typeof s[key] === 'object') {
//         const value = JSON.stringify(s[key]);
//         console.log(`The inner key is ${JSON.stringify(key)} and the property of that obejct key is ${value}`);
//     }
// }


// const obj = Object.entries(game1["odds"]);
// obj.forEach(([key, value]) => {
//     if (typeof value === 'object') {
//         console.log(`Object key => ${key} and obj value ${JSON.stringify(value)}`);
//     }
// })

// const obj2 = Object.entries(game1['odds']);
// for(let i in obj2) {
//     const value = obj2[i];
//     const avg = ((Number(value + (i + 1))) / 2)
//     console.log(avg);
// }

let sum3 = 0
let avg3;
const objVal = Object.values(game1['odds']);

for ( let i of objVal) {
    sum3 = sum3 + i;
    avg3 = sum3 / 2
}

console.log(avg3);




