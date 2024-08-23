'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');  
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };


// btnsOpenModal.forEach(btn => btn, addEventListener('click', openModal));


// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// function formatMovementDate(date, local) {

//   const calculateDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//   const daysPassed = calculateDaysPassed(new Date(), date);
//   console.log(daysPassed);


//   if (daysPassed === 0) return 'Today';
//   if (daysPassed === 1) return 'Yesterday';
//   if (daysPassed <= 7) return `${daysPassed} days agp`;

//   const day = `${date.getDate()}`.patStart(2, 0);
//   const month = `${date.getMonth() + 1}`.padStart(2, 0);
//   const year = date.getFullYear();
//   const fullDate = `${day}/${month}/${year}`;

//   return new Intl.DateTimeFormat(local).format(date);
// }



// const formatCurrency = function (value, locale, currency) {

//   return new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: 'currency'
//   }).format(value);

// };

// const displayMovements = function (movements, sort = false) {
//   movements.forEach(function (mov, i) {

//     containerMovements.innerHTML = '';
//     const movs = sort ? movements.slice().sort((a, b) => a - b) : acc.movements;

//     movs.forEach(function (mov, i) {

//       const type = mov > 0 ? 'deposit' : 'withdrawal';
//       const date = new Date(acc.moventsDates[i]);
//       const displayDate = formatMovementDate(date, acc.local);

//       const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

//       const fullDate = `${day}/${month}/${year}${hour}:${min}`;
//       labelDate.textContent = fullDate;

//       const html = `<div class="movements_row">
//           <div class="movements_type movements__type--${type}">${i + 1} ${type}</div>
//           <div class="movements_date">${displayDate}</div>
//           <div class="movements__value> ${formatMovementDate} </div>
//           <div class="movements_value"> ${mov.toFixed(2)}</div>
//       </div>
//       `;
//     });
//   });

//   containerMovements.insertAdjacentHTML('afterbegin', html);
// };


// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy.`);
//     }
//   });
// };


// const createUsername = function (accs) {
//   return accs;
// };

// const user = 'Tommy Lee';
// console.log(createUsername(user));


// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// //Accumulator
// const calcPrintBalance = function (movements) {

//   const balance = movements.reduce(function (acc, cur) {
//     return acc + cur
//   }, 0);

//   labelBalance.textContent = `${balance} euro`;
// };

// calcPrintBalance(account1.movements);

// const calcDisplayBalance = function (acc) {

//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   const formattedMov = formatCurrency(acc.balance, acc.locale, acc.currency);
// };

// const eurTousd = 1.1;
// const totalInUSDdollars = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurTousd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalInUSDdollars);

// const calcDisplaySummary = function (acc) {

//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);

//   labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);

//   labelSumIn.textContent = `${Math.abs(out)} euro`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => deposit * (acc.interest / 100))
//     .filter((int, i, arr) => {
//       return int >= 1;
//     })

//   labelSumInterest.textContent = `${interest.toFixed(2)} euro`;

// };


// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Math.floor(inputLoanAmount.value);
//   const currentAccountMovements = currentAccount
//     .movements
//     .some(mov => mov >= amount * 1.1);

//   if (amoun > 0 && currentAccountMovements) {
//     currentAccount.movements.push(amount);

//     updateUI(currentAccount);
//   }

//   inputLoanAmount.value = ' ';
// });


// //Event handlers
// let currentAccount;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = account.find(acc => acc.username === inputLoginUsername.value);

//   if (currentAccount.pin === Number(nputLoginPinvalue)) {
//     console.log('LOGIN');
//     labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

//     cotainerApp.style.opacity = 100;

//     //Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';

//     inputLoginPin.blur();

//     displayMovements(currentAccount.movements);
//     calcPrintBalance(currentAccount.movements);
//     calcDisplaySummary(currentAccount);
//   }
// });

// console.log(movements);
// console.log(movements.includes(-130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);


// let sorted = false;

// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);

//   sorted - !sorted;
// });


// //Every
// console.log(movements.every(mov => mov > 0));

// //Sorting asc
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// //Sorting desc
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// const bankDepositSum = account
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// const sums = account
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur) => { cur > 0 ? sum.deposit += cur : sums.withdrawal += cur },
//     { deposits: 0, withdrawal: 0 });

// //Prefixed operator ++a
// let a = 5;
// console.log(++a);
// console.log(a);

// //Postfixed operator a++
// let b = 10;
// console.log(b++);
// console.log(b);

// const { depositsV2, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sums, cur) => {
//     cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//   }, { deposits: 0, withdrawal: 0 });

// console.log(sumsTwo);

// //this is a nice title -> This Is A Nice Title

// const convertTitleCase = function (title) {

//   const capitalize = str => str[0]
//     .toUpperCase() + str
//       .slice(1);

//   const exceptions = ['a', 'an', 'and', 'the',
//     'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title.toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = +inputTransferAmount.value;
//   const receiveAcc = account.find(username.value === inputTransferTo.value);
//   inputTransferAmount.value = inputTransferTo.value = '';

//   let isAmountPossitive = amount > 0;
//   let isCurrentAccountBalanceGreater = currentAccount.balance >= amount;
//   let isCurrentAccountValid = currentAccount.username !== receiveAcc?.username;

//   if (isAmountPossitive && isCurrentAccountBalanceGreater && isCurrentAccountValid) {
//     //Actual transfer
//     currentAccount.movements.push(-amount);
//     receiveAcc.movements.push(amount);

//     //Adding transfer date
//     currentAccount.moventsDates.push(new Date());

//     updateUI(currentAccount);
//   }

//   inputLoanAmount.value = '';
// });

// const startLogOutTimer = function () {
//   let time = 100;

//   setInterval(function () {
//     labelTimer.textContent = time;
//     time--;
//   }, 1000);
// };


// //Experimenting API
// const now = new Date();

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
//   weekday: 'long'
// };

// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options)
//   .format(now);

// setTimeout(() => console.log('Here is your pizza.'), 3000);

// //setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now)
// }, 1000);


document.querySelector('.btn--close--coockie').addEventListener('click', function () {

    message.parentElement.removeChild(message);
  });

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab-active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// //Menu fade animation
const handleHover = function (e) {


  const isNavLinkAvailable = e.target.classList.contains('nav__link');

  if (isNavLinkAvailable) {

    const link = e.target;
    const sibling = link.closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = link.closest('.nav')
      .querySelector('img');

    sibling.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      else {
        logo.style.opacity = this;
      }
    });
  }
};


const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', handleHover.bind(0, 5));
nav.addEventListener('mouseout', handleHover.bind(1));

const osbCallback = function (enties, observer) {
  enties.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(osbCallback, obsOptions);
observer.observe(section1);
