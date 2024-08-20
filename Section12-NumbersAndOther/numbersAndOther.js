//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px', 2));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseFloat('2.5rem'));

console.log(isNaN(20));
console.log(isNaN('20'));
console.log(isNaN(+'20'));


//Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

