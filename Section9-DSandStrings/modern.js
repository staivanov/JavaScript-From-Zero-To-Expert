const books =
{
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
        goodreads: {
            rating: 4.41,
            ratingsCount: 1733,
            reviewsCount: 63,
            fiveStarRatingCount: 976,
            oneStarRatingCount: 13
        }
    },
    highlighted: true
};

const [first, second] = books.keywords;
console.log(first, second);

//Spread operator
let newKeywords = [...books.keywords, 'ORM'];
newKeywords[newKeywords.length - 1] = 'JavaScript';
console.log(newKeywords);
console.log(books.keywords);

//Rest pattern
const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
console.log(a, b, other);


//Functions
const addNumbers = function (...numbers) {

    let sum = 0;

    numbers.forEach(number => {
        sum += number;
    });

    return sum;
};

addNumbers(1);
addNumbers(2, 3);
addNumbers(99, 14, 83);


//For-of loop
for (const keyword of books.keywords) {
    console.log(keyword);
}

//Optional chaining
const users = [{ name: 'Jonas', email: 'jonas@gmail.com' }];
const usersTwo = [{}];
console.log(users[0].name ?? 'User array is empty.');
console.log(usersTwo[0].name ?? 'User array is empty.');

const bookKeywordKeys = Object.values(books.keywords);

for (let keyword of bookKeywordKeys) {
    console.log(keyword);
}

//Sets
//Unique group of values
let keywords = new Set(books.keywords);
console.log(keywords.size);
console.log(keywords.has('programming'));
console.log(keywords.has('javascript'));


//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
const book = new Map();
book.set('name', 'Harry Poter')
    .set('author', "J. K. Rowling")
    .set('year', '2001');

console.log(book.get('name'));
console.log(...book.keys());
console.log(...book.values());

//Working with strings
const atpMastersParis = 'Rolex Paris Masters';
const topPlayer = 'Roger Federer';
console.log(topPlayer[0]);

console.log(atpMastersParis.indexOf('r'));
console.log(atpMastersParis.lastIndexOf('r'));
console.log(atpMastersParis.indexOf('Paris'));
console.log(atpMastersParis.slice(1, 4));

const announcement = 'Hello from JS course zero to hero.';
console.log(announcement.replace('Hello', 'Hi'));

if (announcement.startsWith('H') && announcement.endsWith('o')) {
    console.log(announcement);
}

//Split
let announcementSplitted = announcement.split(' ');
console.log(announcementSplitted);

//Repeat
let message = 'be positive';
console.log(message.repeat(3));