'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const displayMovements = function (movements, sort = false) {
  movements.forEach(function (mov, i) {

    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movements.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `<div class="movements_row">
      <div class="movements_type movements__type--deposit">${i + 1}</div>
      <div class="movements_value"> ${mov}</div>
      </div>
      `;
    });



  });

  containerMovements.insertAdjacentHTML('afterbegin', html);
};


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

displayMovements(account1.movements);


const createUsername = function (accs) {

  accs.forEach(function (acc) {
    acc.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(' ');
  });

};

const user = 'Tommy Lee';
console.log(createUsername(user));

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
console.log(movements);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

//Accumulator
const calcPrintBalance = function (movements) {

  const balance = movements.reduce(function (acc, cur) {
    return acc + cur
  }, 0);

  labelBalance.textContent = `${balance} euro`;
};

calcPrintBalance(account1.movements);

const eurTousd = 1.1;
const totalInUSDdollars = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurTousd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalInUSDdollars);

const calcDisplaySummary = function (acc) {

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} euros`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${Math.abs(out)} euro`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interest / 100))
    .filter((int, i, arr) => {
      return int >= 1;
    })

  labelSumInterest.textContent = `${interest} euro`;

};

//Event handler
let currentAccount;

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const currentAccountMovements = currentAccount
    .movements
    .some(mov => mov >= amount * 1.1);

  if (amoun > 0 && currentAccountMovements) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  inputLoanAmount.value = ' ';
});



btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = account.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount.pin === Number(nputLoginPinvalue)) {
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    cotainerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    displayMovements(currentAccount.movements);
    calcPrintBalance(currentAccount.movements);
    calcDisplaySummary(currentAccount);
  }
});

console.log(movements);
console.log(movements.includes(-130));
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);


let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);

  sorted - !sorted;
});


//Every
console.log(movements.every(mov => mov > 0));

//Sorting asc
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

//Sorting desc
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

const bankDepositSum = account
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

const sums = account
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => { cur > 0 ? sum.deposit += cur : sums.withdrawal += cur },
    { deposits: 0, withdrawal: 0 });

//Prefixed operator ++a
let a = 5;
console.log(++a);
console.log(a);

//Postfixed operator a++
let b = 10;
console.log(b++);
console.log(b);

const { depositsV2, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  }, { deposits: 0, withdrawal: 0 });

console.log(sumsTwo);

//this is a nice title -> This Is A Nice Title

const convertTitleCase = function (title) {

  const capitalize = str => str[0]
    .toUpperCase() + str
      .slice(1);

  const exceptions = ['a', 'an', 'and', 'the',
    'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};