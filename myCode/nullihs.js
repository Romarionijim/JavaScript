let num = 0;
const guest = (num) || 11;
console.log(guest);

//nullish => null + undefined => it is not considered falsy
const guestCorrect = num ?? 11;
console.log(guestCorrect);