//Slice
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letters.slice(2));
console.log(letters.slice(2, 4));
console.log(letters.slice(-2));

//Splice
console.log(letters.splice(2));
console.log(letters);

//Reverse
const lettersTwo = ['j', 'i', 'h', 'g', 'f'];
console.log(lettersTwo.reverse());

//Concat
const allLetters = letters.concat(lettersTwo);
console.log(allLetters);

//Join
console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i} You deposit ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log('------FOREEACH------');

movements.forEach(function (movement, i, array) {
    if (movement > 0) {
        console.log(`Movement ${i} You deposit ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

const eurToUsd = 1.1;
const moventsToUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});

console.log(movements);
console.log(moventsToUSD);

