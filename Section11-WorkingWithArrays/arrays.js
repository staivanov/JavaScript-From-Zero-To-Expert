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

