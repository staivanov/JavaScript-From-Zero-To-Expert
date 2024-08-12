const ageSomeone = 2024 - 34;
const ageAni = 2024 - 31;

console.log(ageSomeone, ageAni);

const firstName = 'Ali';
const lastName = 'Baba';
console.log(firstName + ' ' + lastName);

//Assignment operators.
let x = 20 + 5;
x += 10;
x -= 5;
x++;
x--;

console.log(x);

//Comparison operators.
// >, <, >=, <=, ==, ===, !==
let isAgeSomeoneOlder = ageSomeone > ageAni;
console.log(isAgeSomeoneOlder);

//Ternary operator. Find the tip and print bil, tip and total.
const bill = 275;
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

let message = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`;
console.log(message);

//Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));

