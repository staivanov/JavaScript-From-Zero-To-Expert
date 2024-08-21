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

//Rouding integers
console.log((Math.trunc(23.3)));
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

//Rouding decimals
console.log((2.7).toFixed(0)); //Always return string
console.log((2.7).toFixed(3)); //Always return string

//Create date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(+future);

//Custom format
const num = 384365.23;

const options = {
    style: 'unit',
    unit: 'celsius',
    currency: 'EUR'
};

const germany = 'Germany';
const usa = 'US';

console.log(usa, new Intl.NumberFormat('en-US', options).format(num));
console.log(germany, new Intl.NumberFormat('de-DE', options).format(num));
