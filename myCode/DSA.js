const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


const newSet = new Set([...gameEvents.values()]);
console.log(newSet);


newSet.delete('🔶 Yellow card')
console.log(newSet);

let gameSize = gameEvents.size;
console.log(gameSize);

console.log(`average is is: ${90 / gameEvents.size}`);

for (let [min, value] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${value}`);
}




